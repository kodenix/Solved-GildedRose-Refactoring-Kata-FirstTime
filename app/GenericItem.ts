import { AbstractItem } from "./AbstractItem";

export class GenericItem extends AbstractItem {
  
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  public updateQualityMain() {
    if (this.havePositiveQuality()) {
      this.decrementOneQualityLevel();
    }
      
    this.restSellInOneDay();

    if (this.haveCeroDaySellInLeft() && this.havePositiveQuality()) {              
      this.decrementOneQualityLevel();    
    }
  }
}


