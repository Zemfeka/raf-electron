import { InvoicesModule } from './invoices.module';

describe('InvoicesModule', () => {
    let InvoicesModule: InvoicesModule;

    beforeEach(() => {
        InvoicesModule = new InvoicesModule();
    });

    it('should create an instance', () => {
        expect(InvoicesModule).toBeTruthy();
    });
});
