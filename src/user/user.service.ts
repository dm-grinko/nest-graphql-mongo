import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, CreateUserInput } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly UserModel: Model<IUser>) {}

  async users(query?: string): Promise<IUser[]> {
    const users = await this.UserModel.find().exec();
    return users.map((user: any) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        posts: user.posts,
        comments: user.comments
    })) as IUser[];
  }

  async user(id: string): Promise<IUser> {
    const user = await this.UserModel.findById(id).exec();
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      posts: user.posts,
      comments: user.comments
    } as IUser; 
  }

  async createUser(data: CreateUserInput): Promise<IUser> {
    // todo createUser

    const createdUsers = new this.UserModel(data);
    return await createdUsers.save();
  }

  async deleteUser(id: number) {
    // todo deleteUser
  }

  async updateUser(id: number, newData: any) {
    // todo updateUser
  }
}
