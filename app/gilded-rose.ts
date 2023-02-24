export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const AgedBrieItemName = 'Aged Brie';
const BackstagePassesItemName = 'Backstage passes to a TAFKAL80ETC concert';
const SulfurasItemName='Sulfuras, Hand of Ragnaros';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateQualityItem(this.items[i]);
    }

    return this.items;
  }

  private updateQualityItem(item: Item) {
    if (this.isGenericItem(item)) {
      if (item.quality > 0 && item.name != SulfurasItemName) {
        item.quality = item.quality - 1;
      }
    } 
    
    if (!this.isGenericItem(item) && this.isQualityMinor50(item)) {
        this.processNotGenericAndWithQualityMinor50(item);
    }
    
    if (item.name != SulfurasItemName) {
      item.sellIn = item.sellIn - 1;
    }

    if (this.isBadSellInDate(item)) {
      this.processWithisBadSellInDate(item);    
    }
  }
  
  private processNotGenericAndWithQualityMinor50(item: Item) {
    item.quality = item.quality + 1;
    if (item.name == BackstagePassesItemName) {
      if (item.sellIn < 11 && this.isQualityMinor50(item)) {
        item.quality = item.quality + 1;
      }
      if (item.sellIn < 6 && this.isQualityMinor50(item)) {
        item.quality = item.quality + 1;
      }
    }
  }

  private processWithisBadSellInDate(item: Item) {
    if (this.isAgedBrieItem(item)) {
      if (this.isQualityMinor50(item)) {
        item.quality = item.quality + 1;
      }
    } else {
      if (item.name == BackstagePassesItemName) {
        item.quality = item.quality - item.quality;
        return;
      }
      if (this.isPositiveQuality(item)) {
        if (item.name != SulfurasItemName) {
          item.quality = item.quality - 1;
        }
      }
    }
  }

  private isAgedBrieItem(item: Item) {
    return item.name == AgedBrieItemName;
  }

  private isQualityMinor50(item: Item) {
    return item.quality < 50;
  }

  private isPositiveQuality(item: Item) {
    return item.quality > 0;
  }

  private isBadSellInDate(item: Item) {
    return item.sellIn < 0;
  }

  private isGenericItem(item: Item) {
    return item.name != AgedBrieItemName && item.name != BackstagePassesItemName;
  }
}
