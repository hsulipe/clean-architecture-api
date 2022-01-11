import {UserData} from '../../../../src/use-cases/register-user-on-mailing-list/user-data'

describe('In memory User repository', () => {
    test('should return null if user is not found', async () => {
        const users: UserData[] = [];
        const userRepo = new InMemoryUserRepository(users)
        const user = await userRepo.findUserByEmail('any@email.com')
        expect(user).toBeNull()
    })
})