import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentInterface, CreateCommentInput } from './comment.model';
import { UserInterface } from 'src/user/user.model';
import { PostInterface } from 'src/post/post.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserInterface>,
    @InjectModel('Posts') private readonly postModel: Model<PostInterface>,
    @InjectModel('Comments') private readonly commentModel: Model<CommentInterface>
  ) {}

  async getComments(query?: string): Promise<CommentInterface[]> {
    try {
      return await this.commentModel.find()
      .populate({path: 'user', model: this.userModel})
      .populate({path: 'posts', model: this.postModel})
      .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async getComment(_id: string): Promise<CommentInterface> {
    try {
      return await this.commentModel.findById(_id)
        .populate({path: 'user', model: this.userModel})
        .populate({path: 'post', model: this.postModel})
        .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async createComment(data: CreateCommentInput): Promise<CommentInterface> {
    const createdComments = await new this.commentModel(data);
    return await createdComments.save();
  }

  async deleteComment(_id: number) {
    // todo deleteComment
  }

  async updateComment(_id: number, newData: any) {
    // todo updateComment
  }
}
