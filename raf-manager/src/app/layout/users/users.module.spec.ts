import { UsersModule } from './users.module';

describe('UsersModule', () => {
    let UsersModule: UsersModule;

    beforeEach(() => {
        UsersModule = new UsersModule();
    });

    it('should create an instance', () => {
        expect(UsersModule).toBeTruthy();
    });
});
