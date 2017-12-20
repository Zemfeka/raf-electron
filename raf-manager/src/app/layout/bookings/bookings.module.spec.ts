import { BookingsModule } from './bookings.module';

describe('BookingsModule', () => {
    let BookingsModule: BookingsModule;

    beforeEach(() => {
        BookingsModule = new BookingsModule();
    });

    it('should create an instance', () => {
        expect(BookingsModule).toBeTruthy();
    });
});
