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
  
  async comments(): Promise<IComment[]> {
    return this.CommentModel.find().exec();
  }

  async createComment(commentInput: CreateCommentInput): Promise<IComment> {
    const createdComments = new this.CommentModel(commentInput);
    return createdComments.save();
  }
}
