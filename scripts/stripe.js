'use strict';

// Crear funcion que se ejecuta al cargar la pagina
// iniciar el objeto stripe con la clave publica
// buscar los elementos de la clase
// leer data-price-id y cantidad
// funcion pay
// si es vacio mostrar alerta
// llamar a stripe con los parametros
// escuchar el click
(() => {
  const stripe = Stripe('pk_live_51QSPBBP7YpqIYI4au0ypjQM7NWtDcONb74COOZaqYlw4ylGDRvcBTcmgipWUbzDfG3YEDfZ6BAcm0UrELexfOVRK00rs8SyWb0');

  function getLineItems() {
    const nodes = document.querySelectorAll('.pedido-productos .producto-item');
    return Array.from(nodes).map(item => {
      const price = item.dataset.priceId; 
      const qty = parseInt(item.querySelector('.producto-cantidad span')?.textContent || '1', 10) || 1;
      return price ? { price, quantity: qty } : null;
    }).filter(Boolean);
  }

  async function pay() {
    const lineItems = getLineItems();
    if (!lineItems.length) {
      alert('Configura data-price-id (price_...) en cada producto.');
      return;
    }
    await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems,
      successUrl: `${location.origin}/?paid=1`,
      cancelUrl: `${location.origin}/?canceled=1`,
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-pagar');
    if (btn) pay();
  });
})();