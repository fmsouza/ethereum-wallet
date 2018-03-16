import { RecentsStore } from '../recents';

describe('RecentsStore', () => {
    
        let recentsStore;
    
        beforeEach(() => recentsStore = new RecentsStore());
    
        it('should be able to change the loading state', () => {
            recentsStore.isLoading(true);
            expect(recentsStore.loading).toBe(true);
        });
    
        it('should be able to add a new address to the store list', () => {
            expect(recentsStore.addresses.length).toBe(0);
            recentsStore.addAddress('0x12345');
            expect(recentsStore.addresses.length).toBe(1);
            expect(recentsStore.addresses[0]).toBe('0x12345');
        });
        
        it('should be able to reset the store state', () => {
            recentsStore.isLoading(true);
            recentsStore.addAddress('0x12345');
            recentsStore.reset();
            expect(recentsStore.addresses.length).toBe(0);
            expect(recentsStore.loading).toBe(false);
        });
});