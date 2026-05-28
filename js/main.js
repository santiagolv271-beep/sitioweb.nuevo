'use strict';

/* ============================================================
   GALERÍA DE TRABAJOS — Editá esta lista para cambiar las fotos

   Instrucciones:
   1. Subí tus fotos a la carpeta "imagenes/" del repositorio
   2. Escribí el nombre exacto de cada archivo en "archivo:"
   3. El sitio solo muestra las primeras 3 fotos (no abruma al visitante)
   4. Para agregar más: copiá un bloque { ... } y pegalo al final de la lista
   ============================================================ */
var PORTFOLIO = [
    /* Las primeras 3 son las que se muestran en el sitio.
       Para cambiar el orden, mové los bloques arriba o abajo. */
    {
        archivo: 'PSA Pta Pintura 017.jpg',
        titulo:  'Impermeabilización de Techos',
        detalle: 'Planta PSA Peugeot-Citroën'
    },
    {
        archivo: 'vw 02.jpg',
        titulo:  'Piso Epoxi Industrial',
        detalle: 'Planta Volkswagen'
    },
    {
        archivo: '8.jpg',
        titulo:  'Revestimiento y Demarcación',
        detalle: 'Planta de Producción'
    },
    /* Las siguientes están guardadas pero no se muestran */
    {
        archivo: 'trabajos psa 5.jpg',
        titulo:  'Aplicación de Revestimiento Epoxi',
        detalle: 'Centro de Distribución PSA'
    },
    {
        archivo: '10.jpg',
        titulo:  'Pisos Epoxi con Demarcación',
        detalle: 'Centro Logístico'
    },
    {
        archivo: '3.jpg',
        titulo:  'Restauración de Piso Industrial',
        detalle: 'Antes y Después'
    },
    {
        archivo: '10 (1).jpg',
        titulo:  'Piso Epoxi con Señalización',
        detalle: 'Taller de Servicio'
    }
];

/* ============================================================
   CONSTRUCCIÓN AUTOMÁTICA DE LA GALERÍA
   No hace falta tocar este código.
   ============================================================ */
(function () {
    var container = document.getElementById('gallery');
    if (!container) return;

    PORTFOLIO.slice(0, 3).forEach(function (foto, i) {
        var item = document.createElement('div');
        item.className = 'g-item reveal' + (i === 0 ? ' tall' : '');

        var img = document.createElement('img');
        img.src     = 'imagenes/' + foto.archivo;
        img.alt     = foto.titulo + ' — ' + foto.detalle;
        img.loading = 'lazy';

        /* Si la imagen no existe, muestra un placeholder limpio */
        img.onerror = function () {
            this.remove();
            var ph = document.createElement('div');
            ph.className = 'g-placeholder';
            ph.innerHTML =
                '<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 32 32" aria-hidden="true">' +
                    '<rect x="3" y="5" width="26" height="22" rx="2"/>' +
                    '<circle cx="11" cy="13" r="3"/>' +
                    '<path d="M3 22l7-6 5 4 4-3 10 7"/>' +
                '</svg>' +
                '<span>' + foto.titulo + '</span>';
            item.appendChild(ph);
        };

        var overlay = document.createElement('div');
        overlay.className = 'g-overlay';
        var label = document.createElement('span');
        label.className = 'g-label';
        label.textContent = foto.titulo + ' — ' + foto.detalle;
        overlay.appendChild(label);

        item.appendChild(img);
        item.appendChild(overlay);
        container.appendChild(item);
    });
})();

/* ============================================================
   NAVBAR — cambia a blanco al hacer scroll
   ============================================================ */
(function () {
    var nav = document.getElementById('nav');
    if (!nav) return;
    function tick() { nav.classList.toggle('scrolled', window.scrollY > 56); }
    window.addEventListener('scroll', tick, { passive: true });
    tick();
})();

/* ============================================================
   HERO — efecto parallax suave en el fondo
   ============================================================ */
(function () {
    var bg = document.getElementById('heroBg');
    if (!bg) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY < window.innerHeight * 1.5)
            bg.style.transform = 'translateY(' + (window.scrollY * 0.26) + 'px)';
    }, { passive: true });
})();

/* ============================================================
   MENÚ MOBILE
   ============================================================ */
(function () {
    var mobileNav = document.getElementById('mobileNav');
    var hamburger = document.getElementById('hamburger');
    var closeBtn  = document.querySelector('.mob-close');
    if (!mobileNav) return;

    if (hamburger) hamburger.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });

    if (closeBtn) closeBtn.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            mobileNav.classList.remove('open');
        });
    });
})();

/* ============================================================
   SCROLL REVEAL — aparición escalonada al entrar en viewport
   ============================================================ */
(function () {
    var els = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            var siblings = Array.from(
                e.target.parentElement.querySelectorAll('.reveal:not(.in)')
            );
            var idx = siblings.indexOf(e.target);
            setTimeout(function () {
                e.target.classList.add('in');
            }, Math.max(0, idx) * 58);
            io.unobserve(e.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -44px 0px' });
    els.forEach(function (el) { io.observe(el); });
})();

/* ============================================================
   CONTADORES ANIMADOS (stats bar)
   ============================================================ */
(function () {
    var bar = document.getElementById('statsBar');
    if (!bar) return;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function runCounter(el) {
        var target = parseInt(el.dataset.target, 10);
        var suffix = el.dataset.suffix || '';
        var dur    = 1600;
        var t0     = performance.now();
        (function tick(now) {
            var p = Math.min((now - t0) / dur, 1);
            el.textContent = Math.floor(easeOut(p) * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
    }

    new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            e.target.querySelectorAll('[data-target]').forEach(function (c, i) {
                setTimeout(function () { runCounter(c); }, i * 160);
            });
            obs.unobserve(e.target);
        });
    }, { threshold: 0.5 }).observe(bar);
})();

/* ============================================================
   FORMULARIO DE CONTACTO — envío real vía formsubmit.co

   IMPORTANTE: La primera vez que alguien complete el formulario,
   llegará un email de verificación a info@hugolopezyhnos.com.
   Hay que hacer clic en el link de ese email para activarlo.
   Después funciona automáticamente.
   ============================================================ */
(function () {
    var form = document.getElementById('contactForm');
    var btn  = document.getElementById('submitBtn');
    if (!form || !btn) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }

        btn.textContent = 'Enviando...';
        btn.classList.add('loading');
        btn.disabled = true;

        var payload = {
            nombre:   (form.querySelector('[name=nombre]')   || {}).value || '',
            empresa:  (form.querySelector('[name=empresa]')  || {}).value || '',
            telefono: (form.querySelector('[name=telefono]') || {}).value || '',
            email:    (form.querySelector('[name=email]')    || {}).value || '',
            servicio: (form.querySelector('[name=servicio]') || {}).value || '',
            mensaje:  (form.querySelector('[name=mensaje]')  || {}).value || ''
        };

        fetch('https://formsubmit.co/ajax/info@hugolopezyhnos.com', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':       'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(function (res) {
            if (!res.ok) throw new Error('server');
            return res.json();
        })
        .then(function () {
            btn.textContent = 'Consulta enviada — te contactamos pronto';
            btn.classList.remove('loading');
            btn.classList.add('sent');
            form.reset();
        })
        .catch(function () {
            btn.textContent = 'Error al enviar — escribinos a info@hugolopezyhnos.com';
            btn.classList.remove('loading');
            btn.classList.add('error');
            btn.disabled = false;
            setTimeout(function () {
                btn.textContent = 'Enviar consulta';
                btn.classList.remove('error');
            }, 6000);
        });
    });
})();

/* ============================================================
   SMOOTH SCROLL para los links internos (#sección)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
