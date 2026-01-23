
import type { CardDevFest2024 } from './cardDevFest2024';
import PaqueteGoldDevFest from "./../../../../assets/devfest2024/img/paqueteGoldImg.png";
import PaqueteSilverDevFest from "./../../../../assets/devfest2024/img/paqueteSilverImg.png";
import ContentSilver from "./../../../../assets/devfest2024/svg/contentSiver.svg"
import ContentGold from "./../../../../assets/devfest2024/svg/contentGold.svg"
import PrecioGold from "./../../../../assets/devfest2024/svg/precioGold.svg"
import PrecioSilver from "./../../../../assets/devfest2024/svg/precioSilver.svg"


export const devCards: CardDevFest2024[] = [
  {
    title: "Paquete Silver",
    packageElements: ["2 Stickers", "1 Llavero", "1 Cuaderno", "2 Pines"],
    content: ContentSilver,
    
    price: 25,
    cardImage: PaqueteSilverDevFest,
    priceImage: PrecioSilver,
    cardColor: "blue",
    link: 'https://forms.gle/H3NY8vyjrwshj4hW6',
  },
  {
    title: "Paquete Gold",
    packageElements: [
      "3 Stickers",
      "1 Llavero",
      "1 Cuaderno",
      "2 Pines",
      "1 Vaso con Popote",
    ],
    price: 45,
    content: ContentGold,
    cardImage: PaqueteGoldDevFest,
    priceImage: PrecioGold,
    cardColor: "green",
    link: 'https://forms.gle/H3NY8vyjrwshj4hW6',
  },
];