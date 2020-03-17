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
    const users = await this.userModel.find()
      .populate({path: 'posts', model: this.postModel})
      .populate({path: 'comments', model: this.commentModel})
      .exec();
    return users.map((user: any) => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        posts: user.posts,
        comments: user.comments
    })) as UserInterface[];
  }

  async getUser(id: string): Promise<UserInterface> {
    try {
      const user = await this.userModel.findById(id)
        .populate({path: 'posts', model: this.postModel})
        .populate({path: 'comments', model: this.commentModel})
        .exec();
      console.log('user >>>', user);
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        posts: user.posts,
        comments: user.comments
      } as UserInterface; 
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
