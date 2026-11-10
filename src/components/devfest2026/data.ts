// Datos compartidos por varias secciones: cambiar un valor aquí lo actualiza en toda la landing.

export const EVENT = {
  name: 'DevFest Tarija 2026',
  theme: 'Build, Secure, Scale',
  date: 'Sábado 28 de noviembre de 2026',
  dateShort: '28 NOV',
  startsAt: '2026-11-28T08:30:00-04:00',
  schedule: '08:30 – 16:00',
  venue: 'Universidad Privada Domingo Savio (UPDS), Tarija',
  venueShort: 'UPDS',
  capacity: 150,
  // shortcut: descuento para los primeros 50 cupos, que se controlan en otra app; al agotarse, volver a 20 Bs y quitar regularPrice con otro PR
  price: '15 Bs',
  regularPrice: '20 Bs',
  registerUrl: 'https://eventos.gdgtarija.com/e/devfest',
  speakersUrl: '/speakers',
  sponsorsUrl: '/sponsors',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=UPDS+Tarija',
} as const;

export const ACTIVITY_NAMES = {
  charlas: 'Charlas',
  codelabs: 'Codelabs',
  hack: 'Hack Racing',
  chill: 'Chill Zone',
  zen: 'Sesión Zen',
  feria: 'Feria de comunidades & sponsors',
} as const;

export type ActivityId = keyof typeof ACTIVITY_NAMES;
