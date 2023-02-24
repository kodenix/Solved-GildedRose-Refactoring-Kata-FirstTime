import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.isNotAgedBrieOrBackstageItem()) {
        if (item.quality > 0 && !item.isSulfurasItem()) {
          item.quality = item.quality - 1;
        }
      } 
      
      if (!item.isNotAgedBrieOrBackstageItem() && item.isQualityMinor50()) {
          this.processNotGenericAndWithQualityMinor50(item);
      }
      
      if (!item.isSulfurasItem()) {
        item.sellIn = item.sellIn - 1;
      }
  
      if (item.isBadSellInDate()) {
        this.processWithisBadSellInDate(item);    
      }
    }

    return this.items;
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
    
    if (item.isPositiveQuality() && !item.isSulfurasItem()) {
        item.quality = item.quality - 1;
    }
    
  }

}
