import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface, CreateUserInput, UpdateUserInput } from './models';
import { PostInterface } from '../post/models';
import { CommentInterface } from '../comment/models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserInterface>,
    @InjectModel('Posts') private readonly postModel: Model<PostInterface>,
    @InjectModel('Comments') private readonly commentModel: Model<CommentInterface>
  ) {}

  async getUsers(query?: string): Promise<UserInterface[]> {


    // UserSchema.index({name: 'text', 'user.name': 'text'});

    // UserSchema.index({'$**': 'text'});

    // return await this.userModel.find({$text: {$search: query}})
    //    .skip(20)
    //    .limit(10)
    //    .exec();

    // https://mongoosejs.com/docs/2.7.x/docs/query.html


    try {
      return await this.userModel.find()
        .populate({path: 'posts', model: this.postModel})
        .populate({path: 'comments', model: this.commentModel})
        .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async getUser(id: string): Promise<UserInterface> {
    try {
      return await this.userModel.findById(id)
        .populate({path: 'posts', model: this.postModel})
        .populate({path: 'comments', model: this.commentModel})
        .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async createUser(data: CreateUserInput): Promise<UserInterface> {
    try {
      const createdUsers = new this.userModel(data);
      return await createdUsers.save();
    } catch (e) {
      console.error(e);
    }
  }

  async deleteUser(id: number): Promise<UserInterface> {
    try {
      return await this.userModel.findByIdAndDelete(id);
    } catch (e) {
      console.error(e);
    }
  }

  async updateUser(id: number, data: UpdateUserInput) {
    try {
      return await this.userModel.findByIdAndUpdate(id, data, {new: true});
    } catch (e) {
      console.error(e);
    }
  }
}
