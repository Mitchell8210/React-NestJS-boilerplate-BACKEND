import { Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { GetUser } from 'src/common/get-user.decorator';
import { UserObjectDto } from './dtos/user-object.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) {}

    @Get()
    getUsers(@GetUser(ValidationPipe) userData: UserObjectDto): Promise<User[]> {
        return this.usersService.getUsers(userData)
    }

    @Get('/me')
    getMe(@GetUser(ValidationPipe) userData: UserObjectDto): Promise<User> {
        return this.usersService.getUserById(userData)
    }

    @Post('/login')
    loginUser(@GetUser(ValidationPipe) userData: UserObjectDto): Promise<User> {
        return this.usersService.loginUser(userData)
    }
}
