import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserInput } from './inputs/user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Users') private UserModel: Model<IUser>
  ) {}
  
  async users(query?: string): Promise<IUser[]> {
    console.log('query', query);
    // todo query users
    return this.UserModel.find().exec();
  }

  async createUser(userInput: CreateUserInput): Promise<IUser> {
    // todo createUser

    const createdUsers = new this.UserModel(CreateUserInput);
    return createdUsers.save();
  }

  async deleteUser(id: number) {
    // todo deleteUser
  }

  async updateUser(id: number, newData: any) {
    // todo updateUser
  }
}
