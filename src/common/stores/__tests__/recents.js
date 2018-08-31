import { RecentsStore } from '../recents';

describe('RecentsStore', () => {
    
        let recentsStore;
    
        beforeEach(() => recentsStore = new RecentsStore());
    
        it('should be able to change the loading state', () => {
            recentsStore.isLoading(true);
            expect(recentsStore.loading).toBe(true);
        });
    
        it('should be able to add a new address to the store list', () => {
            expect(recentsStore.list.length).toBe(0);
            recentsStore.addAddress('0x12345');
            expect(recentsStore.list.length).toBe(1);
            expect(recentsStore.list[0]).toBe('0x12345');
        });
        
        it('should be filter repeated addresses', () => {
            expect(recentsStore.list.length).toBe(0);
            recentsStore.addAddress('0x12345');
            expect(recentsStore.list.length).toBe(1);
            recentsStore.addAddress('0x12345');
            expect(recentsStore.list.length).toBe(1);
        });
        
        it('should be able to update the state with a list of addresses', () => {
            expect(recentsStore.list.length).toBe(0);
            recentsStore.loadAddresses(['0x12345', '0x54321']);
            expect(recentsStore.list.length).toBe(2);
        });
        
        it('should avoid adding duplicates when updating the state with a list of addresses', () => {
            expect(recentsStore.list.length).toBe(0);
            recentsStore.loadAddresses(['0x12345', '0x54321', '0x12345']);
            expect(recentsStore.list.length).toBe(2);
        });
        
        it('should be able to reset the store state', () => {
            recentsStore.isLoading(true);
            recentsStore.addAddress('0x12345');
            recentsStore.reset();
            expect(recentsStore.list.length).toBe(0);
            expect(recentsStore.loading).toBe(false);
        });
});