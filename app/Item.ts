const AgedBrieItemName = 'Aged Brie';
const BackstagePassesItemName = 'Backstage passes to a TAFKAL80ETC concert';
const SulfurasItemName='Sulfuras, Hand of Ragnaros';

export abstract class AbstractItem {
  public name: string;
  public sellIn: number;
  public quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  
  public updateQuality() {
    this.updateQualityMain()
  }
  protected abstract updateQualityMain();

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

  public restSellInOneDay() {
    this.sellIn = this.sellIn - 1;
  }

  public haveQualityMinor50(): boolean {
    return this.quality < 50;
  }

  public havePositiveQuality(): boolean {
    return this.quality > 0;
  }

  public haveCeroDaySellInLeft(): boolean {
    return this.sellIn < 0;
  }
  
  public haveSellInMinor6(): boolean {
    return this.sellIn < 6;
  }

  public haveSellInMinor11AndMayorEqual6(): boolean {
    return this.sellIn >= 6 && this.sellIn < 11;
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

export class Item extends AbstractItem {
  
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  public updateQualityMain() {
    switch (this.name) {
      case SulfurasItemName: break;
      case AgedBrieItemName:
      case BackstagePassesItemName: {
        if (this.isAgedBrieOrBackstageItem()) {
          if (this.haveQualityMinor50()) {
            if (!this.isBackstagePassesItem()) {
              this.incrementOneQualityLevel();
            } else {
              if (this.haveSellInMinor11AndMayorEqual6()) {
                this.incrementTwoQualityLevel();
              }
              if (this.haveSellInMinor6()) {
                this.incrementThreeQualityLevel();
              }
            }
          }

          this.restSellInOneDay();

          if (this.haveCeroDaySellInLeft()) {
            if (this.isAgedBrieItem() && this.havePositiveQuality()) {
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
        
        if (this.havePositiveQuality()) {
          this.decrementOneQualityLevel();
        }
         
        this.restSellInOneDay();

        if (this.haveCeroDaySellInLeft() && this.havePositiveQuality()) {              
          this.decrementOneQualityLevel();    
        }
      }
    }
  }

  
}


