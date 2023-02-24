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

  public updateQuality() {
    switch (this.name) {
      case SulfurasItemName: break;
      case AgedBrieItemName:
      case BackstagePassesItemName: {
        if (this.isAgedBrieOrBackstageItem()) {
          if (this.isQualityMinor50()) {
            if (!this.isBackstagePassesItem()) {
              this.incrementOneQualityLevel();
            } else {
              if (this.isSellInMinor11AndMayorEqual6()) {
                this.incrementTwoQualityLevel();
              }
              if (this.isSellInMinor6()) {
                this.incrementThreeQualityLevel();
              }
            }
          }

          this.restSellInDay();

          if (this.isSellInCeroDayLeft()) {
            if (this.isAgedBrieItem() && this.isPositiveQuality()) {
              this.incrementOneQualityLevel();
              break;
            } 
              
            if (this.isBackstagePassesItem()) {
              this.lostAllQuality();
              break;
            }
            
            
          }
        }
        break;
      }
      default: {
        
        if (this.quality > 0) {
          this.decrementOneQualityLevel();
        }
         
        this.restSellInDay();

        if (this.isSellInCeroDayLeft() && this.isPositiveQuality()) {              
          this.decrementOneQualityLevel();    
        }
      }
    }
  }

  public incrementQualityLevel(level: number) {
    this.quality = this.quality + level;
  }

  public incrementOneQualityLevel() {
    this.incrementQualityLevel(1);
  }

  public incrementTwoQualityLevel() {
    this.incrementQualityLevel(2);
  }

  public incrementThreeQualityLevel() {
    this.incrementQualityLevel(3);
  }
  
  public decrementOneQualityLevel() {
    this.quality = this.quality - 1
  }
  
  public lostAllQuality() {
    this.quality = 0;
  }

  public restSellInDay() {
    this.sellIn = this.sellIn - 1;
  }

  public isQualityMinor50(): boolean {
    return this.quality < 50;
  }

  public isPositiveQuality(): boolean {
    return this.quality > 0;
  }

  public isSellInCeroDayLeft(): boolean {
    return this.sellIn < 0;
  }
  
  public isSellInMinor6(): boolean {
    return this.sellIn < 6;
  }

  public isSellInMinor11AndMayorEqual6(): boolean {
    return this.sellIn >= 6 && this.sellIn < 11;
  }

  public isNotAgedBrieOrBackstageItem(): boolean {
    return this.name != AgedBrieItemName && this.name != BackstagePassesItemName;
  }

  public isAgedBrieOrBackstageItem(): boolean {
    return this.name === AgedBrieItemName || this.name === BackstagePassesItemName;
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
