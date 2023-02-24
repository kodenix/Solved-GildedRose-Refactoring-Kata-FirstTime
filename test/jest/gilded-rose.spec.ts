import { GildedRose } from '@/gilded-rose';
import { GenericItem, MagicItems, SulfurasItem } from "@/Item";

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new GenericItem('foo', 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
  
});

describe('When GenericItem is intialize with values', () => {
  const name = 'foo';
  const item = new GenericItem(name, 1, 5);
  it('name should be the same', () => {
    expect(item.name).toBe('foo');
  });

  it('sellIn should be the same', () => {
    expect(item.sellIn).toBe(1);
  });

  it('quality should be the same', () => {
    expect(item.quality).toBe(5);
  });
  
})



describe('Generic items', () => {
  it('should be decremented quality by 1 number', () => {
    const gildedRose = new GildedRose([new GenericItem('+5 Dexterity Vest', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });
});

describe('Generic items', () => {
  it('should be decremented sellIn by 1 number', () => {
    const gildedRose = new GildedRose([new GenericItem('+5 Dexterity Vest', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });
});

describe('Una vez que ha pasado la fecha recomendada de venta', () => {
  it('la calidad se degrada al doble de velocidad', () => {
    const gildedRose = new GildedRose([new GenericItem('+5 Dexterity Vest', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});

describe('La calidad de un artículo', () => {
  it('nunca es negativa', () => {
    const gildedRose = new GildedRose([new GenericItem('+5 Dexterity Vest', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe('El "Queso Brie envejecido" (Aged brie)', () => {
  
  it('Su calidad aumenta en 1 unidad', () => {
    const gildedRose = new GildedRose([new MagicItems('Aged Brie', 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it('luego de la fecha de venta su calidad aumenta 2 unidades por día', () => {
    const gildedRose = new GildedRose([new MagicItems('Aged Brie', 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });

});

describe('El artículo "Sulfuras" (Sulfuras), siendo un artículo legendario', () => {
  it('Sulfuras, Hand of Ragnaros', () => {
    const gildedRose = new GildedRose([new SulfurasItem(10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(10);
  });
});

describe('Una "Entrada al Backstage",', () => {
  const name = 'Backstage passes to a TAFKAL80ETC concert';
  describe('si faltan 10 días o menos para el concierto', () => {
    it('la calidad se incrementa en 2 unidades', () => {
      const gildedRose = new GildedRose([
        new MagicItems(name, 10, 5),
        new MagicItems(name, 6, 5)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(7);
      expect(items[1].quality).toBe(7);
    });
    
  });
  
  
  describe('si faltan 5 días o menos, la calidad', () => {
    it('la calidad se incrementa en 3 unidades', () => {
      const gildedRose = new GildedRose([new MagicItems(name, 5, 5), new MagicItems(name, 1, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
      expect(items[1].quality).toBe(8);
    });
  });

  describe('luego de la fecha de venta",', () => {
    it('la calidad cae a 0', () => {
      const gildedRose = new GildedRose([new MagicItems(name, 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});