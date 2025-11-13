'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Traducciones
  const translations = {
    es: {
      title: 'Workcango - Tu Pedido',
      yourOrder: 'Tu Pedido',
      orderSummary: 'Resumen del pedido',
      totalProducts: 'Productos totales',
      originalPrice: 'Precio original',
      shippingCosts: 'Gastos de envío',
      discount: 'Descuento',
      total: 'Total',
      promoPlaceholder: 'Agregar código promocional',
      done: 'Hecho',
      payNow: 'Pagar ahora',
      acceptedPaymentMethods: 'Métodos de pago aceptados',
      sunglassesForMen: 'Gafas de sol para hombre',
      sneakersForMen: 'Zapatillas para hombre',
      watchForMen: 'Reloj de pulsera para hombre.',
      delete: 'Eliminar',
      iphoneXSMax: 'iPhone XS Max'
    },
    en: {
      title: 'Workcango - Your Order',
      yourOrder: 'Your Order',
      orderSummary: 'Order Summary',
      totalProducts: 'Total Products',
      originalPrice: 'Original Price',
      shippingCosts: 'Shipping Costs',
      discount: 'Discount',
      total: 'Total',
      promoPlaceholder: 'Add promotional code',
      done: 'Done',
      payNow: 'Pay Now',
      acceptedPaymentMethods: 'Accepted Payment Methods',
      sunglassesForMen: 'Sunglasses for men',
      sneakersForMen: 'Sneakers for men',
      watchForMen: 'Wrist watch for men.',
      delete: 'Delete',
      iphoneXSMax: 'iPhone XS Max'
    }
  };

  // Estado actual del idioma
  let currentLanguage = localStorage.getItem('language') || 'es';

  // Función para traducir la página
  function translatePage(lang) {
    const t = translations[lang];
    
    // Cambiar título de la página
    document.title = t.title;
    
    // Cambiar idioma del HTML
    document.documentElement.lang = lang;
    
    // Traducir elementos específicos por selector
    const elements = [
      { selector: '.pedido-productos h2', text: t.yourOrder },
      { selector: '.resumen-titulo', text: t.orderSummary },
      { selector: '.resumen-lista .fila:nth-child(1) span:first-child', text: t.totalProducts },
      { selector: '.resumen-lista .fila:nth-child(2) span:first-child', text: t.originalPrice },
      { selector: '.resumen-lista .fila:nth-child(3) span:first-child', text: t.shippingCosts },
      { selector: '.resumen-lista .fila:nth-child(4) span:first-child', text: t.discount },
      { selector: '.resumen-total span:first-child', text: t.total },
      { selector: '.btn-hecho', text: t.done },
      { selector: '.btn-pagar', text: t.payNow }
    ];

    // Aplicar traducciones básicas
    elements.forEach(item => {
      const element = document.querySelector(item.selector);
      if (element) {
        element.textContent = item.text;
      }
    });

    // Traducir placeholder del input
    const promoInput = document.querySelector('.promo-input');
    if (promoInput) {
      promoInput.setAttribute('placeholder', t.promoPlaceholder);
    }

    // Traducir productos por contenido específico
    document.querySelectorAll('.producto-nombre').forEach(element => {
      const text = element.textContent.trim();
      if (text.includes('Gafas') || text.includes('Sunglasses')) {
        element.textContent = t.sunglassesForMen;
      } else if (text.includes('Zapatillas') || text.includes('Sneakers')) {
        element.textContent = t.sneakersForMen;
      } else if (text.includes('Reloj') || text.includes('watch') || text.includes('Wrist')) {
        element.textContent = t.watchForMen;
      } else if (text.includes('iPhone')) {
        element.textContent = t.iphoneXSMax;
      }
    });

    // Traducir imágenes de eliminar
    document.querySelectorAll('img[alt="Eliminar"], img[alt="Delete"]').forEach(img => {
      img.setAttribute('alt', t.delete);
    });

    // Buscar y traducir el h2 de métodos de pago
    const allH2 = document.querySelectorAll('h2');
    allH2.forEach(h2 => {
      if (h2.textContent.includes('Métodos de pago') || h2.textContent.includes('Payment Methods')) {
        h2.textContent = t.acceptedPaymentMethods;
      }
    });

    // Guardar idioma actual
    localStorage.setItem('language', lang);
    currentLanguage = lang;
  }

  // Aplicar idioma guardado al cargar la página
  translatePage(currentLanguage);

  // Funcionalidad del traductor usando el nuevo id
  const translateBtn = document.getElementById('translateBtn');
  if (translateBtn) {
    translateBtn.addEventListener('click', () => {
      // Alternar entre español e inglés
      const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
      translatePage(newLanguage);
    });
  }
});


