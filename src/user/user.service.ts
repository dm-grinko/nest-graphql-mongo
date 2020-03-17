import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface, CreateUserInput } from './user.model';
import { PostInterface } from 'src/post/post.model';
import { CommentInterface } from 'src/comment/comment.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserInterface>,
    @InjectModel('Posts') private readonly postModel: Model<PostInterface>,
    @InjectModel('Comments') private readonly commentModel: Model<CommentInterface>
  ) {}

  async getUsers(query?: string): Promise<UserInterface[]> {
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
    console.log('data', data);
    // todo createUser

    const createdUsers = new this.userModel(data);
    return await createdUsers.save();
  }

  async deleteUser(_id: number) {
    // todo deleteUser
  }

  async updateUser(_id: number, newData: any) {
    // todo updateUser
  }
}
