import * as Action from '../general';

describe('GeneralActions', () => {

    it('should trigger a call for a notification in the view', async function() {
      const notificationDriverMock = { show: jest.fn(), LENGTH_SHORT: 1000 };
      try {
          await Action.notify('Test notification', 'short', notificationDriverMock);
          expect(notificationDriverMock.show).toBeCalledWith({ title: 'Test notification', duration: 1000 });
      } catch (e) {
          fail(e);
      }
    });
});