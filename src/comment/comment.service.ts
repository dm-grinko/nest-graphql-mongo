import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentInterface, CreateCommentInput, UpdateCommentInput } from './models';
import { UserInterface } from '../user/models';
import { PostInterface } from '../post/models';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserInterface>,
    @InjectModel('Posts') private readonly postModel: Model<PostInterface>,
    @InjectModel('Comments') private readonly commentModel: Model<CommentInterface>
  ) {}

  async getComments(query?: string): Promise<CommentInterface[]> {
    try {
      
      if (!query) {
        return await this.commentModel.find()
          .populate({path: 'user', model: this.userModel})
          .populate({path: 'posts', model: this.postModel})
          .exec();
      } else {
        const queryObject = {text: new RegExp('^' + query + '$', "i")}
        return await this.commentModel.find(queryObject)
          .populate({path: 'user', model: this.userModel})
          .populate({path: 'posts', model: this.postModel})
          .exec();
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getComment(id: string): Promise<CommentInterface> {
    try {
      return await this.commentModel.findById(id)
        .populate({path: 'user', model: this.userModel})
        .populate({path: 'post', model: this.postModel})
        .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async createComment(data: CreateCommentInput): Promise<CommentInterface> {
    try {
      const createdComments = await new this.commentModel(data);
      return await createdComments.save();
    } catch (e) {
      console.error(e);
    }
  }

  async deleteComment(id: number) {
    try {
      return await this.commentModel.findByIdAndDelete(id);
    } catch (e) {
      console.error(e);
    }
  }

  async updateComment(id: number, data: UpdateCommentInput) {
    try {
      return await this.userModel.findByIdAndUpdate(id, data, {new: true});
    } catch (e) {
      console.error(e);
    }
  }
}
