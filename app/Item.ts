export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public updateQuality() { }

  public isQualityMinor50() {
    return this.quality < 50;
  }

  public isPositiveQuality() {
    return this.quality > 0;
  }

  public isBadSellInDate() {
    return this.sellIn < 0;
  }
}
