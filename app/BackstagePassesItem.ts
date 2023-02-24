import { AbstractItem, BackstagePassesItemName } from "./AbstractItem";


export class BackstagePassesItem extends AbstractItem {

  constructor(sellIn, quality) {
    const name = BackstagePassesItemName;
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
