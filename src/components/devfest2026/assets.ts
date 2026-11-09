import type { ImageMetadata } from 'astro';
import logo from '../../assets/images/devfest2026/logo-devfest.webp';
import capybara from '../../assets/images/devfest2026/capibara_saludo.webp';
import bridge from '../../assets/images/devfest2026/puente_tarija_hero.webp';

/*
 * Coloca las imágenes finales en src/assets/images/devfest2026/ e impórtalas aquí.
 * Cambia cada undefined por el import correspondiente; Header y Hero las usarán
 * automáticamente con el componente Image de Astro.
 *
 * Ejemplo:
 * import bubble from '../../assets/images/devfest2026/bubble.webp';
 * bubble: bubble,
 */
export const DEVFEST_ASSETS: {
  logo: ImageMetadata | undefined;
  capybara: ImageMetadata | undefined;
  bridge: ImageMetadata | undefined;
  bubble: ImageMetadata | undefined;
  cross: ImageMetadata | undefined;
  arrow: ImageMetadata | undefined;
} = {
  logo,
  capybara,
  bridge,
  bubble: undefined,
  cross: undefined,
  arrow: undefined,
};
