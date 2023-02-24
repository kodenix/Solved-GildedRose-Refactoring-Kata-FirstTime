import { GildedRose } from '@/gilded-rose';
import { GenericItem } from "@/Item";

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new GenericItem('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});
