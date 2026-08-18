/* Namora Clínica Dental — Gestión de consentimiento de cookies
   Conforme al art. 22.2 LSSI-CE y a la Guía de cookies de la AEPD:
   - No se instala ninguna cookie no necesaria antes del consentimiento.
   - Rechazar es tan sencillo como aceptar (mismo nivel de acción).
   - El consentimiento se puede modificar o retirar en cualquier momento.
   - El consentimiento caduca a los 12 meses y se vuelve a solicitar. */
(function () {
  'use strict';

  var COOKIE_NAME = 'namora_cookie_consent';
  var VERSION = 1;              // Subir este número si cambian las categorías o los proveedores
  var MAX_AGE = 60 * 60 * 24 * 365; // 12 meses

  var CATEGORIES = [
    {
      key: 'necessary',
      name: 'Cookies necesarias',
      always: true,
      text: 'Imprescindibles para que la web funcione y para recordar tu elección sobre cookies. No pueden desactivarse.'
    },
    {
      key: 'preferences',
      name: 'Preferencias y contenido externo',
      text: 'Permiten mostrar contenido incrustado de terceros, como el mapa de Google Maps con la ubicación de la clínica.'
    },
    {
      key: 'analytics',
      name: 'Análisis y medición',
      text: 'Permiten conocer de forma agregada cómo se usa la web para mejorarla. Actualmente no hay herramientas de medición activas en este sitio.'
    }
  ];

  /* ---------- Almacenamiento ---------- */

  function rawValue() {
    var match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]*)'));
    if (match) return decodeURIComponent(match[1]);
    // Alternativa cuando el navegador bloquea las cookies (p. ej. modo restringido)
    try {
      return window.localStorage.getItem(COOKIE_NAME);
    } catch (e) {
      return null;
    }
  }

  function readConsent() {
    var raw = rawValue();
    if (!raw) return null;
    try {
      var data = JSON.parse(raw);
      if (!data || data.v !== VERSION) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(prefs) {
    var data = { v: VERSION, date: new Date().toISOString().slice(0, 10) };
    CATEGORIES.forEach(function (cat) {
      data[cat.key] = cat.always ? true : !!prefs[cat.key];
    });
    var value = JSON.stringify(data);
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = COOKIE_NAME + '=' + encodeURIComponent(value) +
      '; path=/; max-age=' + MAX_AGE + '; SameSite=Lax' + secure;
    try {
      window.localStorage.setItem(COOKIE_NAME, value);
    } catch (e) { /* almacenamiento no disponible */ }
    return data;
  }

  function clearThirdPartyCookies() {
    // Elimina cookies de terceros accesibles desde este dominio al retirar el consentimiento.
    var keep = [COOKIE_NAME];
    document.cookie.split(';').forEach(function (raw) {
      var name = raw.split('=')[0].trim();
      if (!name || keep.indexOf(name) !== -1) return;
      document.cookie = name + '=; path=/; max-age=0';
      document.cookie = name + '=; path=/; domain=.' + location.hostname + '; max-age=0';
    });
  }

  /* ---------- Aplicación del consentimiento ---------- */

  function applyConsent(consent) {
    window.namoraConsent = consent;

    document.querySelectorAll('[data-consent-embed]').forEach(function (box) {
      var category = box.getAttribute('data-consent-embed');
      if (consent[category]) {
        loadEmbed(box);
      } else {
        restorePlaceholder(box);
      }
    });

    document.dispatchEvent(new CustomEvent('namora:consent', { detail: consent }));
  }

  function loadEmbed(box) {
    if (box.querySelector('iframe')) return;
    var src = box.getAttribute('data-embed-src');
    if (!src) return;
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.loading = 'lazy';
    iframe.title = box.getAttribute('data-embed-title') || 'Contenido externo';
    iframe.setAttribute('allowfullscreen', '');
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    box.innerHTML = '';
    box.classList.add('is-loaded');
    box.appendChild(iframe);
  }

  function restorePlaceholder(box) {
    if (box.classList.contains('is-loaded')) {
      box.innerHTML = '';
      box.classList.remove('is-loaded');
    }
    if (box.querySelector('.consent-placeholder')) return;

    var fallback = box.getAttribute('data-embed-fallback');
    var wrap = document.createElement('div');
    wrap.className = 'consent-placeholder';
    wrap.innerHTML =
      '<p class="consent-placeholder-title">Mapa de Google no cargado</p>' +
      '<p>Para mostrar este mapa necesitamos tu permiso, porque Google puede instalar cookies en tu dispositivo. ' +
      'Consulta la <a href="politica-cookies.html">política de cookies</a>.</p>' +
      '<div class="consent-placeholder-actions">' +
      '<button class="btn btn-primary" type="button" data-consent-accept="preferences">Aceptar y ver el mapa</button>' +
      (fallback ? '<a class="btn btn-ghost" href="' + fallback + '" target="_blank" rel="noopener">Abrir en Google Maps</a>' : '') +
      '</div>';
    box.appendChild(wrap);
  }

  /* ---------- Interfaz ---------- */

  function buildUI() {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookie-banner-title');
    banner.setAttribute('aria-describedby', 'cookie-banner-text');
    banner.hidden = true;

    var options = CATEGORIES.map(function (cat) {
      return '<div class="cookie-option">' +
        '<label class="cookie-option-head">' +
        '<input type="checkbox" data-cookie-cat="' + cat.key + '"' +
        (cat.always ? ' checked disabled' : '') + '>' +
        '<span>' + cat.name + (cat.always ? ' <em>(siempre activas)</em>' : '') + '</span>' +
        '</label>' +
        '<p>' + cat.text + '</p>' +
        '</div>';
    }).join('');

    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<h2 id="cookie-banner-title">Uso de cookies</h2>' +
        '<p id="cookie-banner-text">Utilizamos cookies propias necesarias para el funcionamiento de la web y, con tu permiso, cookies de terceros para mostrar contenido externo como el mapa de la clínica. ' +
        'Puedes aceptarlas todas, rechazarlas todas o elegir por categorías. Más información en la <a href="politica-cookies.html">política de cookies</a> y en la <a href="politica-privacidad.html">política de privacidad</a>.</p>' +
        '<div class="cookie-panel" hidden>' + options + '</div>' +
        '<div class="cookie-actions">' +
          '<button class="btn btn-primary" type="button" data-cookie-action="accept">Aceptar todas</button>' +
          '<button class="btn btn-outline" type="button" data-cookie-action="reject">Rechazar todas</button>' +
          '<button class="btn btn-ghost" type="button" data-cookie-action="panel" aria-expanded="false">Configurar</button>' +
          '<button class="btn btn-outline" type="button" data-cookie-action="save" hidden>Guardar preferencias</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);
    return banner;
  }

  function init() {
    var banner = buildUI();
    var panel = banner.querySelector('.cookie-panel');
    var btnPanel = banner.querySelector('[data-cookie-action="panel"]');
    var btnSave = banner.querySelector('[data-cookie-action="save"]');
    var boxes = banner.querySelectorAll('[data-cookie-cat]');

    function show(openPanel) {
      banner.hidden = false;
      document.body.classList.add('has-cookie-banner');
      if (openPanel) togglePanel(true);
      var focusable = banner.querySelector('button:not([hidden])');
      if (focusable) focusable.focus();
    }

    function hide() {
      banner.hidden = true;
      document.body.classList.remove('has-cookie-banner');
    }

    function togglePanel(open) {
      panel.hidden = !open;
      btnSave.hidden = !open;
      btnPanel.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function decide(prefs) {
      var previous = readConsent();
      var consent = saveConsent(prefs);
      if (previous && !consent.preferences && previous.preferences) clearThirdPartyCookies();
      applyConsent(consent);
      hide();
    }

    banner.addEventListener('click', function (ev) {
      if (!ev.target || !ev.target.closest) return;
      var btn = ev.target.closest('[data-cookie-action]');
      if (!btn) return;
      var action = btn.getAttribute('data-cookie-action');
      if (action === 'accept') decide({ preferences: true, analytics: true });
      if (action === 'reject') decide({ preferences: false, analytics: false });
      if (action === 'panel') togglePanel(panel.hidden);
      if (action === 'save') {
        var prefs = {};
        boxes.forEach(function (input) {
          prefs[input.getAttribute('data-cookie-cat')] = input.checked;
        });
        decide(prefs);
      }
    });

    document.addEventListener('click', function (ev) {
      if (!ev.target || !ev.target.closest) return;
      var settings = ev.target.closest('[data-cookie-settings]');
      if (settings) {
        ev.preventDefault();
        var current = readConsent();
        boxes.forEach(function (input) {
          var key = input.getAttribute('data-cookie-cat');
          if (!input.disabled) input.checked = !!(current && current[key]);
        });
        show(true);
        return;
      }
      var accept = ev.target.closest('[data-consent-accept]');
      if (accept) {
        ev.preventDefault();
        var cat = accept.getAttribute('data-consent-accept');
        var saved = readConsent() || {};
        var prefs = { preferences: saved.preferences, analytics: saved.analytics };
        prefs[cat] = true;
        decide(prefs);
      }
    });

    var consent = readConsent();
    if (consent) {
      applyConsent(consent);
    } else {
      applyConsent({ necessary: true, preferences: false, analytics: false });
      show(false);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
