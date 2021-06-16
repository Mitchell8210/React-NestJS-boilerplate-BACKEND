import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserObjectDto } from './dtos/user-object.dto';
import { User } from './user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async getUsers(userData: UserObjectDto): Promise<User[]>{
        return this.userRepository.getUsers(userData);
    }

    async getUserById(userData: UserObjectDto): Promise<User> {
        return this.userRepository.getUserById(userData)
    }

    async loginUser(userData: UserObjectDto): Promise<User> {
        return this.userRepository.loginUser(userData);
    }

}
