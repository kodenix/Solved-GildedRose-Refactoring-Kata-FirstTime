import { AbstractItem, AgedBrieItemName, BackstagePassesItemName } from "./AbstractItem";


export class MagicItems extends AbstractItem {

  constructor(sellIn, quality) {
    const name = AgedBrieItemName
    super(name, sellIn, quality);
  }

  public updateQualityMain() {
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
