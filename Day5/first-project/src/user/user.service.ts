import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}
@Injectable()
export class UserService {
  private users: User[] = [];
  getUsers() {
    return this.users;
  }

  createUser(body: CreateUserDto) {
    const newUser: User = {
      id: Date.now(),
      ...body,
    };
    this.users.push(newUser);
    return newUser;
  }
}
