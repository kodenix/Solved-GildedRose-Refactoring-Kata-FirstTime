export const AgedBrieItemName = 'Aged Brie';
export const BackstagePassesItemName = 'Backstage passes to a TAFKAL80ETC concert';
export const SulfurasItemName='Sulfuras, Hand of Ragnaros';

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
    this.updateQualityMain();
  }

  protected abstract updateQualityMain();

  protected incrementQualityLevel(level: number) {
    this.quality = this.quality + level;
  }

  protected incrementOneQualityLevel() {
    this.incrementQualityLevel(1);
  }

  protected incrementTwoQualityLevel() {
    this.incrementQualityLevel(2);
  }

  protected incrementThreeQualityLevel() {
    this.incrementQualityLevel(3);
  }

  protected decrementOneQualityLevel() {
    this.quality = this.quality - 1;
  }

  protected lostAllQuality() {
    this.quality = 0;
  }

  protected restSellInOneDay() {
    this.sellIn = this.sellIn - 1;
  }

  protected haveQualityMinor50(): boolean {
    return this.quality < 50;
  }

  protected havePositiveQuality(): boolean {
    return this.quality > 0;
  }

  protected haveCeroDaySellInLeft(): boolean {
    return this.sellIn < 0;
  }

  protected haveSellInMinor6(): boolean {
    return this.sellIn < 6;
  }

  protected haveSellInMinor11AndMayorEqual6(): boolean {
    return this.sellIn >= 6 && this.sellIn < 11;
  }

}
