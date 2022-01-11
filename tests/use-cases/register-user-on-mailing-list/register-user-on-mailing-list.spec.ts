import { UserData } from '../../../src/use-cases/register-user-on-mailing-list/user-data'

describe('Register user on mailing list use case', () => {
  test('shoudl add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    const repository: UserRepository = new InMemoryUserRepository(users)
    const useCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repository)
    const name = 'any_name'
    const email = 'any@email.com'

    const response = await useCase.registerUserOnMailingList({ name, email })

    const user = repository.findUserByEmail('any@email.com')
    expect((await user).name).toBe('any_name')
  })
})
