import { InvoicePrintModule } from './invoiceprint.module';

describe('InvoicePrintModule', () => {
    let blankPageModule: InvoicePrintModule;

    beforeEach(() => {
        blankPageModule = new InvoicePrintModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
