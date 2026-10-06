// Movimiento sobrio: progreso de scroll, sección activa en el menú y línea de tiempo.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Barra de progreso (indicador de posición, no es una animación decorativa)
const bar = document.querySelector<HTMLElement>('[data-progress]');
if (bar) {
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = `scaleX(${ratio})`;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', update, { passive: true });
  update();
}

// Sección activa en el menú (solo en el índice)
if (location.pathname === '/' || location.pathname === '/index.html') {
  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="/#"]').forEach((a) => {
    links.set(a.getAttribute('href')!.slice(2), a);
  });
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
  const setCurrent = (id: string | null) => {
    links.forEach((a, key) => {
      if (key === id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setCurrent(links.has(entry.target.id) ? entry.target.id : null);
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((s) => spy.observe(s));
}

// Línea de tiempo: se enciende al llegar a cada cargo (única animación de entrada)
const items = Array.from(document.querySelectorAll<HTMLElement>('.tl-item'));
if (items.length && !reduce && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('tl-anim');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -25% 0px' },
  );
  items.forEach((item) => io.observe(item));
}
