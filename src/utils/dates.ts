// El historial de eventos se cargó a mano con formatos distintos ("20 de junio de 2026", "4 May 2024", "20 abr 2024"),
// así que se normaliza aquí en vez de exigir un formato único en el JSON.
const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

export function parseSpanishDate(raw: string): Date | null {
  const match = raw.trim().match(/(\d{1,2})\s+(?:de\s+)?([a-záéíóú]+)\.?\s+(?:de\s+)?(\d{4})/i);
  if (!match) return null;

  const [, day, monthName, year] = match;
  const month = MONTHS.indexOf(monthName.slice(0, 3).toLowerCase());
  if (month === -1) return null;

  return new Date(Date.UTC(Number(year), month, Number(day)));
}

export function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(date)
    .replace('.', '');
}

export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
