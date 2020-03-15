import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from './interfaces/post.interface';
import { CreatePostInput } from './inputs/post.input';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Posts') private PostModel: Model<IPost>
  ) {}
  
  async posts(): Promise<IPost[]> {
    return this.PostModel.find().exec();
  }

  async createPost(postInput: CreatePostInput): Promise<IPost> {
    const createdPosts = new this.PostModel(postInput);
    return createdPosts.save();
  }
}
