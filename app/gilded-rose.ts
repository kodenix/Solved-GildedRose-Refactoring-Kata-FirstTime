import { Item } from "./Item";

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
    if (item.isNotAgedBrieOrBackstageItem()) {
      if (item.quality > 0 && !this.isSulfurasItem(item)) {
        item.quality = item.quality - 1;
      }
    } 
    
    if (!item.isNotAgedBrieOrBackstageItem() && item.isQualityMinor50()) {
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
    if (item.isBackstagePassesItem() && item.isQualityMinor50()) {
      if (item.isSellInMinor11()) {
        item.quality = item.quality + 1;
      }
      if (item.isSellInMinor6()) {
        item.quality = item.quality + 1;
      }
    }
  }

  

  private processWithisBadSellInDate(item: Item) {
    if (item.isAgedBrieItem()) {
      if (item.isQualityMinor50()) {
        item.quality = item.quality + 1;
      }
      return;
    } 
      
    if (item.isBackstagePassesItem()) {
      item.quality = item.quality - item.quality;
      return;
    }
    
    if (item.isPositiveQuality() && !this.isSulfurasItem(item)) {
        item.quality = item.quality - 1;
    }
    
  }
  

  private isSulfurasItem(item) {
    return item.name === SulfurasItemName;
  }

}
