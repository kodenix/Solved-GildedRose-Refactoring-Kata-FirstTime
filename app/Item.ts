const AgedBrieItemName = 'Aged Brie';
const BackstagePassesItemName = 'Backstage passes to a TAFKAL80ETC concert';
const SulfurasItemName='Sulfuras, Hand of Ragnaros';

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

  public isQualityMinor50(): boolean {
    return this.quality < 50;
  }

  public isPositiveQuality(): boolean {
    return this.quality > 0;
  }

  public isBadSellInDate(): boolean {
    return this.sellIn < 0;
  }
  
  public isSellInMinor6(): boolean {
    return this.sellIn < 6;
  }

  public isSellInMinor11(): boolean {
    return this.sellIn < 11;
  }

  public isNotAgedBrieOrBackstageItem(): boolean {
    return this.name != AgedBrieItemName && this.name != BackstagePassesItemName;
  }

  public isBackstagePassesItem(): boolean {
    return this.name == BackstagePassesItemName
  }

  public isAgedBrieItem(): boolean {
    return this.name == AgedBrieItemName;
  }

  public isSulfurasItem(): boolean {
    return this.name === SulfurasItemName;
  }
}
