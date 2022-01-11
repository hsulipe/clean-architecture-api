import { UserRepository } from '../ports/user-repository';
import { UserData } from '../user-data';

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[];

  constructor(users: UserData[]) {
    this.repository = users;
  }

  add(user: UserData): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<UserData> {
    return null;
  }

  findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.');
  }

  exists(user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
