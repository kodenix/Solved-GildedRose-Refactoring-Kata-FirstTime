import { AbstractItem, AgedBrieItemName } from "./AbstractItem";

export class AgedBrieItem extends AbstractItem {

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
