import { InvoicesModule } from './invoices.module';

describe('InvoicesModule', () => {
    let invoicesModule: InvoicesModule;

    beforeEach(() => {
        invoicesModule = new InvoicesModule();
    });

    it('should create an instance', () => {
        expect(invoicesModule).toBeTruthy();
    });
});
