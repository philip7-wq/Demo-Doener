'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navigation / Hamburger ─────────────────────────────── */
  const hamburger = document.querySelector('[data-hamburger]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('is-open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        hamburger.focus();
      }
    });
  }

  /* ── Scroll-Reveal ──────────────────────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.revealDelay || 0;
            setTimeout(() => el.classList.add('is-visible'), Number(delay));
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(el => observer.observe(el));
    }
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* ── Maps Click-to-Load ─────────────────────────────────── */
  const mapsPlaceholder = document.querySelector('[data-maps-placeholder]');
  const mapsLoadBtn = document.querySelector('[data-maps-load]');

  if (mapsPlaceholder && mapsLoadBtn) {
    mapsLoadBtn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.0!2d11.08!3d49.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57a4d6c30de3%3A0xb28a1b89f9f0e0a5!2sAllersberger+Stra%C3%9Fe+48%2C+90461+N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde';
      iframe.width = '100%';
      iframe.height = '360';
      iframe.style.border = '0';
      iframe.style.display = 'block';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      iframe.title = 'Google Maps: ' + CLIENT.name + ', ' + CLIENT.street + ', ' + CLIENT.city;
      mapsPlaceholder.replaceChildren(iframe);
    });
  }

  /* ── Speisekarte — aktiver Anker-Link beim Scroll ───────── */
  const menuAnchors = document.querySelectorAll('.menu-anchor-link');
  const menuCategories = document.querySelectorAll('.menu-category');

  if (menuAnchors.length > 0 && menuCategories.length > 0) {
    const anchorObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          menuAnchors.forEach(a => {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    menuCategories.forEach(cat => anchorObserver.observe(cat));
  }

});
