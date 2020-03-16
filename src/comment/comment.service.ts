import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IComment } from './interfaces/comment.interface';
import { CreateCommentInput } from './inputs/comment.input';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comments') private CommentModel: Model<IComment>
  ) {}

  async comments(query?: string): Promise<IComment[]> {
    console.log('query', query);
    // todo query comments
    return this.CommentModel.find().exec();
  }

  async createComment(data: CreateCommentInput): Promise<IComment> {
    // todo createComment

    const createdComments = new this.CommentModel(data);
    return createdComments.save();
  }

  async deleteComment(id: number) {
    // todo deleteComment
  }

  async updateComment(id: number, newData: any) {
    // todo updateComment
  }
}
