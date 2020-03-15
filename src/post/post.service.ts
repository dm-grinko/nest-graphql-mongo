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
  
  async posts(query?: string): Promise<IPost[]> {
    console.log('query', query);
    // todo query users
    return this.PostModel.find().exec();
  }

  async createPost(userInput: CreatePostInput): Promise<IPost> {
    // todo createPost

    const createdPosts = new this.PostModel(CreatePostInput);
    return createdPosts.save();
  }

  async deletePost(id: number) {
    // todo deletePost
  }

  async updatePost(id: number, newData: any) {
    // todo updatePost
  }
}
