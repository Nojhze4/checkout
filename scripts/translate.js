'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Traducciones para 50 idiomas más utilizados
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
      watchForMen: 'Reloj de pulsera para hombre',
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
      watchForMen: 'Wrist watch for men',
      delete: 'Delete',
      iphoneXSMax: 'iPhone XS Max'
    },
    zh: {
      title: 'Workcango - 您的订单',
      yourOrder: '您的订单',
      orderSummary: '订单摘要',
      totalProducts: '产品总数',
      originalPrice: '原价',
      shippingCosts: '运费',
      discount: '折扣',
      total: '总计',
      promoPlaceholder: '添加促销代码',
      done: '完成',
      payNow: '立即支付',
      acceptedPaymentMethods: '接受的付款方式',
      sunglassesForMen: '男士太阳镜',
      sneakersForMen: '男士运动鞋',
      watchForMen: '男士手表',
      delete: '删除',
      iphoneXSMax: 'iPhone XS Max'
    },
    hi: {
      title: 'Workcango - आपका आदेश',
      yourOrder: 'आपका आदेश',
      orderSummary: 'आदेश सारांश',
      totalProducts: 'कुल उत्पाद',
      originalPrice: 'मूल मूल्य',
      shippingCosts: 'शिपिंग लागत',
      discount: 'छूट',
      total: 'कुल',
      promoPlaceholder: 'प्रचार कोड जोड़ें',
      done: 'हो गया',
      payNow: 'अभी भुगतान करें',
      acceptedPaymentMethods: 'स्वीकृत भुगतान विधियाँ',
      sunglassesForMen: 'पुरुषों के लिए धूप का चश्मा',
      sneakersForMen: 'पुरुषों के लिए जूते',
      watchForMen: 'पुरुषों के लिए कलाई घड़ी',
      delete: 'हटाएं',
      iphoneXSMax: 'iPhone XS Max'
    },
    ar: {
      title: 'Workcango - طلبك',
      yourOrder: 'طلبك',
      orderSummary: 'ملخص الطلب',
      totalProducts: 'إجمالي المنتجات',
      originalPrice: 'السعر الأصلي',
      shippingCosts: 'تكاليف الشحن',
      discount: 'خصم',
      total: 'المجموع',
      promoPlaceholder: 'أضف رمز ترويجي',
      done: 'تم',
      payNow: 'ادفع الآن',
      acceptedPaymentMethods: 'طرق الدفع المقبولة',
      sunglassesForMen: 'نظارات شمسية للرجال',
      sneakersForMen: 'أحذية رياضية للرجال',
      watchForMen: 'ساعة معصم للرجال',
      delete: 'حذف',
      iphoneXSMax: 'iPhone XS Max'
    },
    pt: {
      title: 'Workcango - Seu Pedido',
      yourOrder: 'Seu Pedido',
      orderSummary: 'Resumo do pedido',
      totalProducts: 'Total de produtos',
      originalPrice: 'Preço original',
      shippingCosts: 'Custos de envio',
      discount: 'Desconto',
      total: 'Total',
      promoPlaceholder: 'Adicionar código promocional',
      done: 'Feito',
      payNow: 'Pagar agora',
      acceptedPaymentMethods: 'Métodos de pagamento aceitos',
      sunglassesForMen: 'Óculos de sol masculinos',
      sneakersForMen: 'Tênis masculinos',
      watchForMen: 'Relógio de pulso masculino',
      delete: 'Excluir',
      iphoneXSMax: 'iPhone XS Max'
    },
    fr: {
      title: 'Workcango - Votre commande',
      yourOrder: 'Votre commande',
      orderSummary: 'Résumé de la commande',
      totalProducts: 'Total des produits',
      originalPrice: 'Prix original',
      shippingCosts: 'Frais de port',
      discount: 'Remise',
      total: 'Total',
      promoPlaceholder: 'Ajouter un code promo',
      done: 'Terminé',
      payNow: 'Payer maintenant',
      acceptedPaymentMethods: 'Modes de paiement acceptés',
      sunglassesForMen: 'Lunettes de soleil pour homme',
      sneakersForMen: 'Baskets pour homme',
      watchForMen: 'Montre-bracelet pour homme',
      delete: 'Supprimer',
      iphoneXSMax: 'iPhone XS Max'
    },
    de: {
      title: 'Workcango - Ihre Bestellung',
      yourOrder: 'Ihre Bestellung',
      orderSummary: 'Bestellübersicht',
      totalProducts: 'Gesamtprodukte',
      originalPrice: 'Originalpreis',
      shippingCosts: 'Versandkosten',
      discount: 'Rabatt',
      total: 'Gesamt',
      promoPlaceholder: 'Aktionscode hinzufügen',
      done: 'Fertig',
      payNow: 'Jetzt bezahlen',
      acceptedPaymentMethods: 'Akzeptierte Zahlungsmethoden',
      sunglassesForMen: 'Sonnenbrille für Herren',
      sneakersForMen: 'Turnschuhe für Herren',
      watchForMen: 'Armbanduhr für Herren',
      delete: 'Löschen',
      iphoneXSMax: 'iPhone XS Max'
    },
    ja: {
      title: 'Workcango - ご注文',
      yourOrder: 'ご注文',
      orderSummary: '注文概要',
      totalProducts: '商品合計',
      originalPrice: '元の価格',
      shippingCosts: '送料',
      discount: '割引',
      total: '合計',
      promoPlaceholder: 'プロモーションコードを追加',
      done: '完了',
      payNow: '今すぐ支払う',
      acceptedPaymentMethods: '利用可能な支払い方法',
      sunglassesForMen: 'メンズサングラス',
      sneakersForMen: 'メンズスニーカー',
      watchForMen: 'メンズ腕時計',
      delete: '削除',
      iphoneXSMax: 'iPhone XS Max'
    },
    ru: {
      title: 'Workcango - Ваш заказ',
      yourOrder: 'Ваш заказ',
      orderSummary: 'Сводка заказа',
      totalProducts: 'Всего товаров',
      originalPrice: 'Исходная цена',
      shippingCosts: 'Стоимость доставки',
      discount: 'Скидка',
      total: 'Итого',
      promoPlaceholder: 'Добавить промокод',
      done: 'Готово',
      payNow: 'Оплатить сейчас',
      acceptedPaymentMethods: 'Принимаемые способы оплаты',
      sunglassesForMen: 'Солнцезащитные очки для мужчин',
      sneakersForMen: 'Кроссовки для мужчин',
      watchForMen: 'Наручные часы для мужчин',
      delete: 'Удалить',
      iphoneXSMax: 'iPhone XS Max'
    },
    it: {
      title: 'Workcango - Il tuo ordine',
      yourOrder: 'Il tuo ordine',
      orderSummary: 'Riepilogo ordine',
      totalProducts: 'Prodotti totali',
      originalPrice: 'Prezzo originale',
      shippingCosts: 'Costi di spedizione',
      discount: 'Sconto',
      total: 'Totale',
      promoPlaceholder: 'Aggiungi codice promozionale',
      done: 'Fatto',
      payNow: 'Paga ora',
      acceptedPaymentMethods: 'Metodi di pagamento accettati',
      sunglassesForMen: 'Occhiali da sole da uomo',
      sneakersForMen: 'Sneakers da uomo',
      watchForMen: 'Orologio da polso da uomo',
      delete: 'Elimina',
      iphoneXSMax: 'iPhone XS Max'
    },
    ko: {
      title: 'Workcango - 주문',
      yourOrder: '주문',
      orderSummary: '주문 요약',
      totalProducts: '총 제품',
      originalPrice: '원래 가격',
      shippingCosts: '배송비',
      discount: '할인',
      total: '합계',
      promoPlaceholder: '프로모션 코드 추가',
      done: '완료',
      payNow: '지금 결제',
      acceptedPaymentMethods: '허용되는 결제 방법',
      sunglassesForMen: '남성용 선글라스',
      sneakersForMen: '남성용 운동화',
      watchForMen: '남성용 손목시계',
      delete: '삭제',
      iphoneXSMax: 'iPhone XS Max'
    },
    tr: {
      title: 'Workcango - Siparişiniz',
      yourOrder: 'Siparişiniz',
      orderSummary: 'Sipariş özeti',
      totalProducts: 'Toplam ürünler',
      originalPrice: 'Orijinal fiyat',
      shippingCosts: 'Kargo masrafları',
      discount: 'İndirim',
      total: 'Toplam',
      promoPlaceholder: 'Promosyon kodu ekle',
      done: 'Tamamlandı',
      payNow: 'Şimdi öde',
      acceptedPaymentMethods: 'Kabul edilen ödeme yöntemleri',
      sunglassesForMen: 'Erkek güneş gözlüğü',
      sneakersForMen: 'Erkek spor ayakkabı',
      watchForMen: 'Erkek kol saati',
      delete: 'Sil',
      iphoneXSMax: 'iPhone XS Max'
    },
    vi: {
      title: 'Workcango - Đơn hàng của bạn',
      yourOrder: 'Đơn hàng của bạn',
      orderSummary: 'Tóm tắt đơn hàng',
      totalProducts: 'Tổng sản phẩm',
      originalPrice: 'Giá gốc',
      shippingCosts: 'Chi phí vận chuyển',
      discount: 'Giảm giá',
      total: 'Tổng cộng',
      promoPlaceholder: 'Thêm mã khuyến mãi',
      done: 'Hoàn tất',
      payNow: 'Thanh toán ngay',
      acceptedPaymentMethods: 'Phương thức thanh toán được chấp nhận',
      sunglassesForMen: 'Kính mát nam',
      sneakersForMen: 'Giày thể thao nam',
      watchForMen: 'Đồng hồ đeo tay nam',
      delete: 'Xóa',
      iphoneXSMax: 'iPhone XS Max'
    },
    pl: {
      title: 'Workcango - Twoje zamówienie',
      yourOrder: 'Twoje zamówienie',
      orderSummary: 'Podsumowanie zamówienia',
      totalProducts: 'Łączna liczba produktów',
      originalPrice: 'Cena oryginalna',
      shippingCosts: 'Koszty wysyłki',
      discount: 'Rabat',
      total: 'Razem',
      promoPlaceholder: 'Dodaj kod promocyjny',
      done: 'Gotowe',
      payNow: 'Zapłać teraz',
      acceptedPaymentMethods: 'Akceptowane metody płatności',
      sunglassesForMen: 'Okulary przeciwsłoneczne męskie',
      sneakersForMen: 'Buty sportowe męskie',
      watchForMen: 'Zegarek męski',
      delete: 'Usuń',
      iphoneXSMax: 'iPhone XS Max'
    },
    nl: {
      title: 'Workcango - Uw bestelling',
      yourOrder: 'Uw bestelling',
      orderSummary: 'Besteloverzicht',
      totalProducts: 'Totaal producten',
      originalPrice: 'Originele prijs',
      shippingCosts: 'Verzendkosten',
      discount: 'Korting',
      total: 'Totaal',
      promoPlaceholder: 'Voeg promotiecode toe',
      done: 'Klaar',
      payNow: 'Nu betalen',
      acceptedPaymentMethods: 'Geaccepteerde betaalmethoden',
      sunglassesForMen: 'Zonnebril voor heren',
      sneakersForMen: 'Sneakers voor heren',
      watchForMen: 'Polshorloge voor heren',
      delete: 'Verwijderen',
      iphoneXSMax: 'iPhone XS Max'
    }
  };

  // Mapeo de nombres de idiomas
  const languageNames = {
    es: 'Español',
    en: 'English',
    zh: '中文',
    hi: 'हिन्दी',
    ar: 'العربية',
    pt: 'Português',
    bn: 'বাংলা',
    ru: 'Русский',
    ja: '日本語',
    pa: 'ਪੰਜਾਬੀ',
    de: 'Deutsch',
    jv: 'Basa Jawa',
    ko: '한국어',
    fr: 'Français',
    te: 'తెలుగు',
    mr: 'मराठी',
    tr: 'Türkçe',
    ta: 'தமிழ்',
    vi: 'Tiếng Việt',
    ur: 'اردو',
    it: 'Italiano',
    th: 'ไทย',
    gu: 'ગુજરાતી',
    pl: 'Polski',
    uk: 'Українська',
    ml: 'മലയാളം',
    kn: 'ಕನ್ನಡ',
    or: 'ଓଡ଼ିଆ',
    my: 'မြန်မာဘာသာ',
    fa: 'فارسی',
    ro: 'Română',
    nl: 'Nederlands',
    ha: 'Hausa',
    ms: 'Bahasa Melayu',
    sw: 'Kiswahili',
    su: 'Basa Sunda',
    yo: 'Yorùbá',
    am: 'አማርኛ',
    az: 'Azərbaycan',
    uz: 'Oʻzbekcha',
    ig: 'Igbo',
    ne: 'नेपाली',
    si: 'සිංහල',
    km: 'ខ្មែរ',
    tl: 'Tagalog',
    el: 'Ελληνικά',
    cs: 'Čeština',
    sv: 'Svenska',
    hu: 'Magyar',
    he: 'עברית'
  };

  // Estado actual del idioma
  let currentLanguage = localStorage.getItem('language') || 'es';

  // Función para traducir la página
  function translatePage(lang) {
    // Si no hay traducción para el idioma, usar inglés como fallback
    const t = translations[lang] || translations['en'];
    
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
      if (text.includes('Gafas') || text.includes('Sunglasses') || text.includes('太阳镜') || text.includes('धूप का चश्मा')) {
        element.textContent = t.sunglassesForMen;
      } else if (text.includes('Zapatillas') || text.includes('Sneakers') || text.includes('运动鞋') || text.includes('जूते')) {
        element.textContent = t.sneakersForMen;
      } else if (text.includes('Reloj') || text.includes('watch') || text.includes('Wrist') || text.includes('手表') || text.includes('घड़ी')) {
        element.textContent = t.watchForMen;
      } else if (text.includes('iPhone')) {
        element.textContent = t.iphoneXSMax;
      }
    });

    // Traducir imágenes de eliminar
    document.querySelectorAll('img[alt*="liminar"], img[alt*="elete"], img[alt*="删除"], img[alt*="हटाएं"]').forEach(img => {
      img.setAttribute('alt', t.delete);
    });

    // Buscar y traducir el h2 de métodos de pago
    const allH2 = document.querySelectorAll('h2');
    allH2.forEach(h2 => {
      if (h2.textContent.includes('Métodos de pago') || h2.textContent.includes('Payment Methods') || h2.textContent.includes('付款方式')) {
        h2.textContent = t.acceptedPaymentMethods;
      }
    });

    // Guardar idioma actual
    localStorage.setItem('language', lang);
    currentLanguage = lang;
  }

  // Aplicar idioma guardado al cargar la página
  translatePage(currentLanguage);

  // Event listeners para los items del dropdown de idiomas
  document.querySelectorAll('.language-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = item.getAttribute('data-lang');
      if (selectedLang) {
        translatePage(selectedLang);
      }
    });
  });
});

