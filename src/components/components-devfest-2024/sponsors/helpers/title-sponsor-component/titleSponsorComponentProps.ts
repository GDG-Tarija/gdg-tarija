const colors = [
  'bg-rojo-GDG',
  'bg-amarillo-GDG',
  'bg-azul-GDG',
  'bg-verde-GDG',
] as const;

type ColorType = typeof colors[number];

export interface TitleSponsorComponentProps {
  color: ColorType;
  title: string;
}