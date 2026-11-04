import { animate, inView, stagger } from 'motion';

// Ease-out-quart: llegada suave y discreta, sin el impulso dramático de una expo
const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Solo se ocultan elementos que aún no se ven: lo que ya está en pantalla al cargar nunca parpadea
const isBelowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.92;

const isShown = (el: Element) =>
  (el as HTMLElement).offsetParent !== null && !(el as HTMLElement).hidden;

// El desfase total de una cascada se limita a ~0.25s para que listas largas no hagan esperar
const staggerFor = (count: number) => stagger(Math.min(0.04, 0.25 / Math.max(count, 1)));

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
    { opacity: [0, 1], y: [8, 0] },
    { duration: 0.35, delay: staggerFor(items.length), ease: EASE },
  );
}

/** Revela al hacer scroll: [data-reveal] entra solo, [data-reveal-group] entra en cascada con sus hijos. */
export function initReveals() {
  if (reduceMotion) return;

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (!isBelowFold(el)) return;
    animate(el, { opacity: 0, y: 12 }, { duration: 0 });
    onceInView(el, () => animate(el, { opacity: 1, y: 0 }, { duration: 0.5, ease: EASE }));
  });

  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    if (!isBelowFold(group)) return;
    const items = Array.from(group.children).filter(isShown);
    animate(items, { opacity: 0, y: 10 }, { duration: 0 });
    onceInView(
      group,
      () =>
        animate(
          items,
          { opacity: 1, y: 0 },
          { duration: 0.45, delay: staggerFor(items.length), ease: EASE },
        ),
      0.1,
    );
  });
}
