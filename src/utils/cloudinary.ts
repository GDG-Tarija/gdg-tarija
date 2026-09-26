// Las fotos del equipo se suben a Cloudinary en tamaño original; pedir un recorte cuadrado centrado en la cara
// evita descargar imágenes de varios MB para mostrar un avatar y encuadra bien fotos de distintas proporciones.
export function cloudinaryAvatar(url: string, size: number): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  return url.replace('/upload/', `/upload/c_fill,g_face,w_${size},h_${size}/`);
}
