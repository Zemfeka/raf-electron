import { ReportsModule } from './reports.module';

describe('ReportsModule', () => {
    let ReportsModule: ReportsModule;

    beforeEach(() => {
        ReportsModule = new ReportsModule();
    });

    it('should create an instance', () => {
        expect(ReportsModule).toBeTruthy();
    });
});
