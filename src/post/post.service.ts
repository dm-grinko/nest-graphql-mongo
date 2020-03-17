import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostInterface, CreatePostInput } from './post.model';
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

  async getPost(_id: string): Promise<PostInterface> {
    try {
      const post = await this.postModel.findById(_id)
        .populate({ path: 'user', model: this.userModel })
        .populate({ path: 'comments', model: this.commentModel })
        .exec();
      return {
        _id: post._id,
        title: post.title,
        body: post.body,
        published: post.published,
        user: post.user,
      } as PostInterface;
    } catch (e) {
      console.error(e);
    }
  }

  async createPost(data: CreatePostInput): Promise<PostInterface> {
    const createdPost = new this.postModel(data);
    return await createdPost.save();
  }

  async deletePost(_id: number) {
    // todo deletePost
  }

  async updatePost(_id: number, newData: any) {
    // todo updatePost
  }
}
