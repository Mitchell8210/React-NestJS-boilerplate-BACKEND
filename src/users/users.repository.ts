import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { UserObjectDto } from "./dtos/user-object.dto";
import {User} from './user.entity'


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    async getUsers(userData: UserObjectDto): Promise<User[]> {
        if(userData.sub === "auth0|60708c12910b6d0071982ee7"){
        const users = await this.find()
        return users;
        } else {
          throw new ConflictException('You suck at getting the users, Bitch.');
        }
    }

    async getUserById(userData: UserObjectDto): Promise<User> {
      const {sub} = userData;
      const user = await this.findOne({external_id: sub})
      
      return user;
    }

    // this function will first check to see if a user already exists with the given auth0 id. 
    // if a user exists it will simply return that user object, otherwise it will initiate the creation of a new user in the database.
    async loginUser(userData: UserObjectDto): Promise<User> {
      const {sub} = userData;

      if(sub){
        const found = await this.findOne({external_id: sub})
        if(found){
          console.log("USER FOUND IN SYSTEM.", found.external_id)
          return found
        } else {
          const user = await this.createUser(userData)
          return user;
        }
      } else {
        throw new ConflictException('Could not determine your identity.');
      }

    }

    async createUser(userData: UserObjectDto): Promise<User> {
      const {name, sub} = userData;

      const user = new User();
      user.name = name;
      user.external_id = sub;
      try {
          await user.save();
          const addedUser = await this.findOne({id: user.id})
          return addedUser;
        } catch (error) {
          if (error.code === '23505') {
            // duplicate username
            throw new ConflictException('Username already exists');
          } else {
            throw new InternalServerErrorException(error);
          }
        }
  }


}