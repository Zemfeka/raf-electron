import { BookingsModule } from './bookings.module';

describe('BookingsModule', () => {
    let bookingsModule: BookingsModule;

    beforeEach(() => {
        bookingsModule = new BookingsModule();
    });

    it('should create an instance', () => {
        expect(bookingsModule).toBeTruthy();
    });
});
