import { GenericItem } from "./Item";
import { AbstractItem } from "./AbstractItem";

export class GildedRose {
  items: Array<AbstractItem>;

  constructor(items = [] as Array<GenericItem>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      item.updateQuality()  
    }

    return this.items;
  }

}
