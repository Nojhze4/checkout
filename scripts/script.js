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

  const money = (n) => `$${n.toFixed(2)}`;

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
    const t = $(".producto-precio", item)?.textContent || "$0";
    const num = parseFloat(t.replace(/[^\d.]/g, "")) || 0;
    return num;
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
      updateResumen();
      return;
    }

    const del = e.target.closest('img[alt="Eliminar"]');
    if (del) {
      const item = del.closest(".producto-item");
      item?.remove();
      updateResumen();
    }
  });

  updateResumen();
});
