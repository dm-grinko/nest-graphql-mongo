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
    const comments = await this.commentModel.find()
      .populate({path: 'user', model: this.userModel})
      .populate({path: 'posts', model: this.postModel})
      .exec();
    return comments.map((comment: any) => ({
      _id: comment._id,
      text: comment.text,
      user: comment.user,
      post: comment.post,
    })) as CommentInterface[];
  }

  async createComment(data: CreateCommentInput): Promise<CommentInterface> {
    const createdComments = await new this.commentModel(data);
    const comment =  await createdComments.save();
    return {
      _id: comment._id,
      text: comment.text,
      user: comment.user,
      post: comment.post,
    } as CommentInterface;
  }

  async deleteComment(_id: number) {
    // todo deleteComment
  }

  async updateComment(_id: number, newData: any) {
    // todo updateComment
  }
}
