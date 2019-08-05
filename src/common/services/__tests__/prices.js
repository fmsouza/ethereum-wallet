import * as Prices from '../prices';
import * as Storage from '../storage';

jest.mock('../storage');

describe('PricesService', () => {

  describe('.loadActiveRate', () => {

    beforeEach(() => Storage.getItem.mockReset());

    it('reads the rate currently saved in memory', async () => {
      const value = 'eur';
      Storage.getItem.mockResolvedValue(value);
      try {
        const activeRate = await Prices.loadActiveRate();
        expect(activeRate).toBe(value);
      } catch (e) {
        fail(e);
      }
    });
  });

  describe('.saveActiveRate', () => {

    beforeEach(() => Storage.setItem.mockReset());

    it('saves the rate to the memory', async () => {
      const value = 'usd';
      Storage.setItem.mockResolvedValue(null);
      try {
        await Prices.saveActiveRate(value);
        expect(Storage.setItem).toHaveBeenCalledWith(expect.anything(), value);
      } catch (e) {
        fail(e);
      }
    });
  });

});