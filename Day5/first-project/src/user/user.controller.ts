import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }
}
