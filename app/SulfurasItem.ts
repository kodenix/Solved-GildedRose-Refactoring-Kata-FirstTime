import { AbstractItem, SulfurasItemName } from "./AbstractItem";


export class SulfurasItem extends AbstractItem {

  constructor(sellIn, quality) {
    super(SulfurasItemName, sellIn, quality);
  }

  public updateQualityMain() { }

}
