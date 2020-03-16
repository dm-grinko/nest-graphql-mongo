import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IComment, CreateCommentInput } from './comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comments') private readonly CommentModel: Model<IComment>,
  ) {}

  async comments(query?: string): Promise<IComment[]> {
    const comments = await this.CommentModel.find().exec();
    return comments.map((comment: any) => ({
      id: comment._id,
      text: comment.text,
      author: comment.author,
      post: comment.post,
    })) as IComment[];
  }

  async createComment(data: CreateCommentInput): Promise<IComment> {
    const createdComments = await new this.CommentModel(data);
    const comment =  await createdComments.save();
    return {
      id: comment._id,
      text: comment.text,
      author: comment.author,
      post: comment.post,
    } as IComment;
  }

  async deleteComment(id: number) {
    // todo deleteComment
  }

  async updateComment(id: number, newData: any) {
    // todo updateComment
  }
}
