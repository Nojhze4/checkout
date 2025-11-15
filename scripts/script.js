"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const filas = $$(".resumen-lista .fila");
  const spTotales = filas[0]?.querySelector("span:last-child");
  const spPrecio = filas[1]?.querySelector("span:last-child");
  const spEnvio = filas[2]?.querySelector("span:last-child");
  const spDesc = filas[3]?.querySelector("span:last-child");
  const spTotal = $(".resumen-total span:last-child");

  const money = (n) => `$${Math.round(n)}`;

  function getItems() {
    return $$(".pedido-productos .producto-item");
  }

  function getQty(item) {
    const n = parseInt(
      $(".producto-cantidad span", item)?.textContent?.trim() || "1",
      10
    );
    return isNaN(n) ? 1 : n;
  }

  function getUnitPrice(item) {
    // Obtener el precio unitario base (siempre será el precio original dividido por la cantidad actual)
    const priceElement = $(".producto-precio", item);
    if (!priceElement) return 0;

    // Si el elemento tiene un atributo data-unit-price, usarlo
    if (priceElement.dataset.unitPrice) {
      return parseFloat(priceElement.dataset.unitPrice) || 0;
    }

    // Si no, calcular el precio unitario basado en el precio actual y cantidad
    const currentPrice =
      parseFloat(priceElement.textContent.replace(/[^\d.]/g, "")) || 0;
    const currentQty = getQty(item);
    const unitPrice = currentQty > 0 ? currentPrice / currentQty : currentPrice;

    // Guardar el precio unitario para futuras referencias
    priceElement.dataset.unitPrice = unitPrice.toString();

    return unitPrice;
  }

  function updateProductPrice(item) {
    const priceElement = $(".producto-precio", item);
    if (!priceElement) return;

    const unitPrice = getUnitPrice(item);
    const qty = getQty(item);
    const totalPrice = unitPrice * qty;

    priceElement.textContent = money(totalPrice);
  }

  function updateResumen() {
    const items = getItems();
    let totalProductos = 0;
    let subtotal = 0;

    for (const it of items) {
      const q = getQty(it);
      const p = getUnitPrice(it);
      totalProductos += q;
      subtotal += q * p;
    }

    const envio = 0;
    const desc = 0;
    const total = subtotal + envio - desc;

    if (spTotales) spTotales.textContent = String(totalProductos);
    if (spPrecio) spPrecio.textContent = money(subtotal);
    if (spEnvio) spEnvio.textContent = money(envio);
    if (spDesc) spDesc.textContent = money(desc);
    if (spTotal) spTotal.textContent = money(total);
  }

  // funcionalidad +/- y eliminar
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".qty-btn");
    if (btn) {
      const item = btn.closest(".producto-item");
      const span = $(".producto-cantidad span", item);
      if (!span) return;
      let n = getQty(item);
      if (btn.textContent.trim() === "+") n++;
      else n = Math.max(1, n - 1);
      span.textContent = String(n);
      updateProductPrice(item);
      updateResumen();
      return;
    }

    // Funcionalidad de eliminar producto
    if (e.target.tagName === "IMG" && e.target.alt === "Eliminar") {
      const item = e.target.closest(".producto-item");
      if (item) {
        item.remove();
        updateResumen();
      }
      return;
    }
  });

  // Inicializar precios unitarios al cargar la página
  function initializeUnitPrices() {
    const items = getItems();
    items.forEach((item) => {
      const priceElement = $(".producto-precio", item);
      if (priceElement && !priceElement.dataset.unitPrice) {
        const currentPrice =
          parseFloat(priceElement.textContent.replace(/[^\d.]/g, "")) || 0;
        priceElement.dataset.unitPrice = currentPrice.toString();
      }
    });
  }

  initializeUnitPrices();
  updateResumen();
});
