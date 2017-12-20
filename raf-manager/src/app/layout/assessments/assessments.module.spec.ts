import { AssessmentsModule } from './assessments.module';

describe('AssessmentsModule', () => {
    let AssessmentsModule: AssessmentsModule;

    beforeEach(() => {
        AssessmentsModule = new AssessmentsModule();
    });

    it('should create an instance', () => {
        expect(AssessmentsModule).toBeTruthy();
    });
});
