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
      const item = this.items[i];

      switch (item.name) {
        case SulfurasItemName: break;
        default: {
          if (!item.isAgedBrieOrBackstageItem()) {
            if (item.quality > 0) {
              item.quality = item.quality - 1;
            }
          } 
          
          if (item.isAgedBrieOrBackstageItem() && item.isQualityMinor50()) {
            this.processNotGenericAndWithQualityMinor50(item);
          }
          
          
          item.restSellInDay();
          
      
          if (item.isSellInCeroDayLeft()) {
            if (item.isAgedBrieItem()) {
              if (item.isQualityMinor50()) {
                item.quality = item.quality + 1;
              }
              continue;
            } 
              
            if (item.isBackstagePassesItem()) {
              item.quality = 0;
              continue;
            }
            
            if (item.isPositiveQuality()) {
                item.quality = item.quality - 1;
            }    
          }
        }
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

  

  /*private processWithisBadSellInDate(item: Item) {
    if (item.isAgedBrieItem()) {
      if (item.isQualityMinor50()) {
        item.quality = item.quality + 1;
      }
      return;
    } 
      
    if (item.isBackstagePassesItem()) {
      item.quality = 0;
      return;
    }
    
    if (item.isPositiveQuality()) {
        item.quality = item.quality - 1;
    }
    
  }*/

}
