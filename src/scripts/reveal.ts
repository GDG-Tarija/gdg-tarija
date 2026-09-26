import { animate, inView, stagger } from 'motion';

// Curva de llegada confiada (ease-out expo), la misma que usan las entradas CSS del hero
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Solo se ocultan elementos que aún no se ven: lo que ya está en pantalla al cargar nunca parpadea
const isBelowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.92;

const isShown = (el: Element) =>
  (el as HTMLElement).offsetParent !== null && !(el as HTMLElement).hidden;

// El desfase total de una cascada se limita a ~0.4s para que listas largas no hagan esperar
const staggerFor = (count: number) => stagger(Math.min(0.07, 0.4 / Math.max(count, 1)));

const onceInView = (el: Element, run: () => void, amount = 0.2) => {
  const stop = inView(
    el,
    () => {
      run();
      stop();
    },
    { amount },
  );
};

/** Anima elementos que acaban de aparecer por una acción (filtros, "Ver todos"). */
export function revealItems(items: Element[]) {
  if (!items.length) return;
  if (reduceMotion) {
    animate(items, { opacity: [0, 1] }, { duration: 0.2 });
    return;
  }
  animate(
    items,
    { opacity: [0, 1], y: [16, 0] },
    { duration: 0.55, delay: staggerFor(items.length), ease: EASE },
  );
}

/** Revela al hacer scroll: [data-reveal] entra solo, [data-reveal-group] entra en cascada con sus hijos. */
export function initReveals() {
  if (reduceMotion) return;

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (!isBelowFold(el)) return;
    animate(el, { opacity: 0, y: 28 }, { duration: 0 });
    onceInView(el, () => animate(el, { opacity: 1, y: 0 }, { duration: 0.8, ease: EASE }));
  });

  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    if (!isBelowFold(group)) return;
    const items = Array.from(group.children).filter(isShown);
    animate(items, { opacity: 0, y: 24 }, { duration: 0 });
    onceInView(
      group,
      () =>
        animate(
          items,
          { opacity: 1, y: 0 },
          { duration: 0.7, delay: staggerFor(items.length), ease: EASE },
        ),
      0.1,
    );
  });
}
