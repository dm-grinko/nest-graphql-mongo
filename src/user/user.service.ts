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
  
  async users(): Promise<IUser[]> {
    return this.UserModel.find().exec();
  }

  async createUser(userInput: CreateUserInput): Promise<IUser> {

    // const emailTaken = db.users.some((user) => user.email === args.data.email)

    // if (emailTaken) {
    //     throw new Error('Email taken')
    // }

    // const user = {
    //     id: uuidv4(),
    //     ...args.data
    // }

    // db.users.push(user)

    // return user





    const createdUsers = new this.UserModel(CreateUserInput);
    return createdUsers.save();
  }
}
