import { AbstractItem, Item } from "./Item";

export class GildedRose {
  items: Array<AbstractItem>;

  constructor(items = [] as Array<Item>) {
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
