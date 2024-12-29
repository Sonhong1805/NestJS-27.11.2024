import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    const listUsers = await this.usersRepository.find();
    return listUsers;
  }

  async createUser(body: CreateUserDto) {
    const newUser = await this.usersRepository.create(body);
    return await this.usersRepository.save(newUser);
  }

  async getUser(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async updateUser(id: number, boby: CreateUserDto) {
    const userRec = await this.usersRepository.findOne({ where: { id: id } });
    const updateUser = {
      ...userRec,
      ...boby,
    };
    return await this.usersRepository.save(updateUser);
  }

  async deleteUser(id: number) {
    return await this.usersRepository.delete(id);
  }
}
