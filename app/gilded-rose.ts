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
        case AgedBrieItemName:
        case BackstagePassesItemName: {
          if (item.isAgedBrieOrBackstageItem()) {
            if (item.isQualityMinor50()) {
              this.processNotGenericAndWithQualityMinor50(item);
            }

            item.restSellInDay();

            if (item.isSellInCeroDayLeft()) {
              if (item.isAgedBrieItem() && item.isPositiveQuality()) {
                item.incrementOneQualityLevel();
                continue;
              } 
                
              if (item.isBackstagePassesItem()) {
                item.lostAllQuality();
                continue;
              }
              
              
            }
          }
          break;
        }
        default: {
          
          if (item.quality > 0) {
            item.decrementOneQualityLevel();
          }
           
          item.restSellInDay();

          if (item.isSellInCeroDayLeft() && item.isPositiveQuality()) {              
            item.decrementOneQualityLevel();    
          }
        }
      }
  
    }

    return this.items;
  }
  
  private processNotGenericAndWithQualityMinor50(item: Item) {
    item.incrementOneQualityLevel();
    if (item.isBackstagePassesItem() && item.isQualityMinor50()) {
      if (item.isSellInMinor11()) {
        item.incrementOneQualityLevel();
      }
      if (item.isSellInMinor6()) {
        item.incrementOneQualityLevel();
      }
    }
  }

}
