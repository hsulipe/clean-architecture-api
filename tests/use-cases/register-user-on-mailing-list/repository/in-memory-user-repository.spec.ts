import { UserData } from '../../../../src/use-cases/register-user-on-mailing-list/user-data'
import { InMemoryUserRepository } from '../../../../src/use-cases/register-user-on-mailing-list/repository/in-memory-user-repository'

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findByEmail('any@email.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const email = 'any@email.com'
    const name = 'any_name'
    const sut = new InMemoryUserRepository(users)
    await sut.add({ email, name })
    const user = await sut.findByEmail('any@email.com')
    expect(user?.name).toBe('any_name')
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      {
        email: 'first@email.com',
        name: 'first_name'
      },
      {
        email: 'second@email.com',
        name: 'second_name'
      }
    ]
    const sut = new InMemoryUserRepository(users)
    const returnedUsers = sut.findAll()
    expect((await returnedUsers).length).toBe(2)
  })
})
