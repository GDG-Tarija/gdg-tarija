export class CardDevFest2024 {
  title: string;
  packageElements: string[];
  price: number;
  content: ImageMetadata;
  cardImage?: ImageMetadata;
  cardColor: 'blue' | 'green';
  link: string;
  priceImage: ImageMetadata;
  constructor(
    {
      title = '',
      packageElements = [],
      price = 0,
      content = undefined,
      cardImage = undefined,
      priceImage = undefined,
      cardColor = 'blue',
      link= '',
    }: CardDevFest2024
  ) {
    this.title = title;
    this.packageElements = packageElements;
    this.price = price;
    this.content = content;
    this.cardImage = cardImage;
    this.priceImage = priceImage;
    this.cardColor = cardColor;
    this.link = link;
  }
}
