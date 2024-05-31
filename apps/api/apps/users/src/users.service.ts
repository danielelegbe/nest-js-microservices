import { Injectable } from '@nestjs/common';
import { UserInsert } from '@app/database/repositories';
import { UsersRepository } from '@app/database/repositories/users/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async createUser(body: UserInsert) {
    return await this.usersRepository.insertNewRecord(body);
  }

  async getUsers() {
    return await this.usersRepository.getAll();
  }

  async getUserById(id: string) {
    return await this.usersRepository.getOneById(id);
  }
}
