import * as Action from '../recents';

describe('RecentsActions', () => {

    const recentsServiceStub = {
        loadRecentAddresses: jest.fn(),
        saveRecentAddresses: jest.fn()
    };

    const recentsStoreStub = {
        addAddress: jest.fn(),
        isLoading: jest.fn(),
        loadAddresses: jest.fn()
    };

    beforeEach(() => {
        recentsServiceStub.loadRecentAddresses.mockReset();
        recentsStoreStub.addAddress.mockReset();
        recentsStoreStub.isLoading.mockReset();
        recentsStoreStub.loadAddresses.mockReset();
        recentsStoreStub.list = [];
    });

    it('should update the store while loading recents', async () => {
        const address = '0x12345';
        recentsServiceStub.loadRecentAddresses.mockImplementationOnce(() => [address]);
        await Action.loadRecents(recentsStoreStub, recentsServiceStub);
        expect(recentsStoreStub.isLoading).toHaveBeenCalledTimes(2);
        expect(recentsStoreStub.isLoading).toHaveBeenNthCalledWith(1, true);
        expect(recentsStoreStub.isLoading).toHaveBeenNthCalledWith(2, false);
        expect(recentsStoreStub.loadAddresses).toHaveBeenCalledWith([address])
    });

    it('should save new address to the recents and storage', async () => {
        const address = '0x12345';
        await Action.saveAddressToRecents(address, recentsStoreStub, recentsServiceStub);
        expect(recentsStoreStub.addAddress).toHaveBeenCalledWith(address);
        expect(recentsStoreStub.isLoading).toHaveBeenCalledTimes(2);
        expect(recentsStoreStub.isLoading).toHaveBeenNthCalledWith(1, true);
        expect(recentsStoreStub.isLoading).toHaveBeenNthCalledWith(2, false);
        expect(recentsServiceStub.saveRecentAddresses).toHaveBeenCalled();
    });
});