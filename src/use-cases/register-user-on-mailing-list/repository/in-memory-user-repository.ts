import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[]

  constructor (users: UserData[]) {
    this.repository = users
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.exists(user)
    if (!exists) {
      this.repository.push(user)
    }
  }

  async findByEmail (email: string): Promise<UserData|null> {
    return this.repository.find(user => user.email === email) || null
  }

  async findAll (): Promise<UserData[]> {
    return this.repository
  }

  async exists (user: UserData): Promise<boolean> {
    if (await this.findByEmail(user.email) === null) {
      return false
    }
    return true
  }
}
