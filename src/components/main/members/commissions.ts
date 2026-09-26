// Mapa único de colores por comisión: lo comparten las tarjetas y el filtro para que un color signifique siempre lo mismo
export const COMMISSION_COLORS: Record<string, string> = {
  Organizer: 'var(--color-gdg-blue)',
  Developer: 'var(--color-gdg-green)',
  Diseño: 'var(--color-gdg-red)',
  Marketing: 'var(--color-gdg-yellow)',
  Logística: 'var(--color-gdg-sunset-orange)',
  Transmisión: 'var(--color-gdg-accent-purple)',
  Decoración: 'var(--color-gdg-halftone-red)',
  Staff: 'var(--color-gdg-halftone-blue)',
};

export const DEFAULT_COMMISSION_COLOR = 'var(--color-gray-400)';

export function commissionColor(commission: string): string {
  return COMMISSION_COLORS[commission] ?? DEFAULT_COMMISSION_COLOR;
}
