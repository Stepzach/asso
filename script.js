(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const header = document.getElementById('site-header');
  if (!toggle || !menu) return;

  const links = [...menu.querySelectorAll('a')];
  const closeMenu = (restoreFocus = false) => {
    if (menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.classList.remove('menu-open');
    if (restoreFocus) toggle.focus();
  };
  const openMenu = () => {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fermer le menu');
    document.body.classList.add('menu-open');
    links[0]?.focus();
  };

  toggle.addEventListener('click', () => menu.hidden ? openMenu() : closeMenu(true));
  links.forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => {
    if (menu.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); }
    if (event.key !== 'Tab') return;
    const focusable = [...links, toggle];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!menu.hidden && !header.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  const sections = [...document.querySelectorAll('main > section[id]')];
  const allNavLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const markActive = (id) => allNavLinks.forEach(link => {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
    link.classList.toggle('active', link.hash === `#${id}`);
  });
  markActive(location.hash.slice(1) || 'accueil');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) markActive(entry.target.id); });
    }, { threshold: 0.6 });
   
    sections.forEach(section => observer.observe(section));
  }

  // Swap outdoors and parcels images on mobile only
  const outdoors = document.querySelector('.outdoors-photo');
  const parcels = document.querySelector('.parcels-photo');

  if (outdoors && parcels) {
    const outdoorsSrc = outdoors.getAttribute('src');
    const parcelsSrc = parcels.getAttribute('src');

    const mobile = window.matchMedia('(max-width: 850px)');

    const updateImages = () => {
      outdoors.setAttribute('src', mobile.matches ? parcelsSrc : outdoorsSrc);
      parcels.setAttribute('src', mobile.matches ? outdoorsSrc : parcelsSrc);
    };

    updateImages();
    mobile.addEventListener('change', updateImages);
  }
})();
