import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPost, CreatePostInput } from './post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Posts') private readonly PostModel: Model<IPost>
  ) {}
  
  async posts(query?: string): Promise<IPost[]> {
    const posts = await this.PostModel.find().exec();
    return posts.map((post: any) => ({
      id: post._id,
      title: post.title,
      body: post.body,
      published: post.published,
      author: post.author,
    })) as IPost[];
  }

  async createPost(data: CreatePostInput): Promise<IPost> {
    const createdPosts = new this.PostModel(data);
    const post = await createdPosts.save();
    console.log('post', post);
    return {
      id: post._id,
      title: post.title,
      body: post.body,
      published: post.published,
      author: post.author,
    } as IPost;
  }

  async deletePost(id: number) {
    // todo deletePost
  }

  async updatePost(id: number, newData: any) {
    // todo updatePost
  }
}
