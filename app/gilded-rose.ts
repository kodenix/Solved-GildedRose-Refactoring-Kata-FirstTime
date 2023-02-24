import { Item } from "./Item";

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
    if (this.isNotAgedBrieOrBackstageItem(item)) {
      if (item.quality > 0 && !this.isSulfurasItem(item)) {
        item.quality = item.quality - 1;
      }
    } 
    
    if (!this.isNotAgedBrieOrBackstageItem(item) && item.isQualityMinor50()) {
        this.processNotGenericAndWithQualityMinor50(item);
    }
    
    if (!this.isSulfurasItem(item)) {
      item.sellIn = item.sellIn - 1;
    }

    if (item.isBadSellInDate()) {
      this.processWithisBadSellInDate(item);    
    }
  }
  
  private processNotGenericAndWithQualityMinor50(item: Item) {
    item.quality = item.quality + 1;
    if (this.isBackstagePassesItem(item) && item.isQualityMinor50()) {
      if (item.isSellInMinor11()) {
        item.quality = item.quality + 1;
      }
      if (item.isSellInMinor6()) {
        item.quality = item.quality + 1;
      }
    }
  }

  

  private processWithisBadSellInDate(item: Item) {
    if (this.isAgedBrieItem(item)) {
      if (item.isQualityMinor50()) {
        item.quality = item.quality + 1;
      }
      return;
    } 
      
    if (this.isBackstagePassesItem(item)) {
      item.quality = item.quality - item.quality;
      return;
    }
    
    if (item.isPositiveQuality() && !this.isSulfurasItem(item)) {
        item.quality = item.quality - 1;
    }
    
  }
  

  private isNotAgedBrieOrBackstageItem(item: Item) {
    return item.name != AgedBrieItemName && item.name != BackstagePassesItemName;
  }

  private isBackstagePassesItem(item: Item) {
    return item.name == BackstagePassesItemName
  }

  private isAgedBrieItem(item: Item) {
    return item.name == AgedBrieItemName;
  }

  private isSulfurasItem(item) {
    return item.name === SulfurasItemName;
  }

}
