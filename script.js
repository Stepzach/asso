/* Small, accessible mobile menu + active navigation. No framework required. */
(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const header = document.querySelector('.site-header');
  if (!toggle || !mobileNav || !header) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    mobileNav.hidden = true;
  }
  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fermer le menu');
    mobileNav.hidden = false;
  }
  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') closeMenu();
    else openMenu();
  });
  mobileNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('pointerdown', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });

  const navItems = document.querySelectorAll('.desktop-nav a');
  const sectionToTab = { projects: 'projets', actions: 'actions', sejours: 'actions', dons: 'dons' };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        const active = sectionToTab[id];
        navItems.forEach(link => {
          const selected = link.dataset.nav === active;
          link.classList.toggle('active', selected);
          if (selected) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    document.querySelectorAll('.screen').forEach(section => observer.observe(section));
  }
})();
