import { AbstractItem, AgedBrieItemName, BackstagePassesItemName } from "./AbstractItem";


export class MagicItems extends AbstractItem {

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    if (name === AgedBrieItemName || name === BackstagePassesItemName) {
      this.name = name;
    } else {
      throw new Error('Cannot initialize  MagicItems with incorrect name');
    }
  }

  public updateQualityMain() {
    
    if (this.isAgedBrieItem()) {
      if (this.haveQualityMinor50()) {
        this.incrementOneQualityLevel();
      }

      this.restSellInOneDay();

      if (this.haveCeroDaySellInLeft()) {
        if (this.havePositiveQuality()) {
          this.incrementOneQualityLevel(); 
        }
      }

    } 
    
    if (this.isBackstagePassesItem()) {
      if (this.haveQualityMinor50()) {
        if (this.haveSellInMinor11AndMayorEqual6()) {
          this.incrementTwoQualityLevel();
        }
        if (this.haveSellInMinor6()) {
          this.incrementThreeQualityLevel();
        }
      }

      this.restSellInOneDay();

      if (this.haveCeroDaySellInLeft()) {
        this.lostAllQuality();
      }

    }

  }
}

export class AgedBrieItems extends AbstractItem {

  constructor(sellIn, quality) {
    const name = AgedBrieItemName;
    super(name, sellIn, quality);
  }

  public updateQualityMain() {
    if (this.haveQualityMinor50()) {
      this.incrementOneQualityLevel();
    }

    this.restSellInOneDay();

    if (this.haveCeroDaySellInLeft()) {
      if (this.havePositiveQuality()) {
        this.incrementOneQualityLevel(); 
      }
    }
  }
}
