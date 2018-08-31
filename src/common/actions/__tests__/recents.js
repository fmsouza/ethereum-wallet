import * as Action from '../recents';

describe('RecentsActions', () => {

    const recentsServiceStub = {
        loadRecentAddresses: jest.fn()
    };

    const recentsStoreStub = {
        isLoading: jest.fn(),
        loadAddresses: jest.fn()
    };

    it('should update the store while loading recents', () => {
        recentsServiceStub.loadRecentAddresses.mockImplementationOnce(() => ['0x12345']);
        Action.loadRecents(recentsStoreStub, recentsServiceStub);
        expect(recentsStoreStub.isLoading).toHaveBeenCalledTimes(2);
        expect(recentsStoreStub.isLoading).toHaveBeenNthCalledWith(1, true);
        expect(recentsStoreStub.isLoading).toHaveBeenNthCalledWith(2, false);
        expect(recentsStoreStub.loadAddresses).toHaveBeenCalledWith(['0x12345'])
    });
});