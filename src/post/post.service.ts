import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostInterface, CreatePostInput, UpdatePostInput } from './post.model';
import { UserInterface } from 'src/user/user.model';
import { CommentInterface } from 'src/comment/comment.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserInterface>,
    @InjectModel('Posts') private readonly postModel: Model<PostInterface>,
    @InjectModel('Comments') private readonly commentModel: Model<CommentInterface>,
  ) {}

  async getPosts(query?: string): Promise<PostInterface[]> {
    try {
      return await this.postModel.find()
        .populate({ path: 'user', model: this.userModel })
        .populate({ path: 'comments', model: this.commentModel })
        .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async getPost(id: string): Promise<PostInterface> {
    try {
      return await this.postModel.findById(id)
        .populate({ path: 'user', model: this.userModel })
        .populate({ path: 'comments', model: this.commentModel })
        .exec();
    } catch (e) {
      console.error(e);
    }
  }

  async createPost(data: CreatePostInput): Promise<PostInterface> {
    try {
      const createdPost = new this.postModel(data);
      return await createdPost.save();
    } catch (e) {
      console.error(e);
    }
  }

  async deletePost(id: number) {
    try {
      return await this.postModel.findByIdAndDelete(id);
    } catch (e) {
      console.error(e);
    }
  }

  async updatePost(id: number, data: UpdatePostInput) {
    try {
      return await this.userModel.findByIdAndUpdate(id, data, {new: true});
    } catch (e) {
      console.error(e);
    }
  }
}
