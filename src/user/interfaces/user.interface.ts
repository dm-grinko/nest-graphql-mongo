import { IPost } from "src/post/interfaces/post.interface";
import { IComment } from "src/comment/interfaces/comment.interface";
import { Document } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  age: number;
  posts: IPost;
  comments: IComment;
}
