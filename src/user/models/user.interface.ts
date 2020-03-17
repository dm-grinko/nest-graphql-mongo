import { Document } from 'mongoose';
import { PostInterface } from 'src/post/models';
import { CommentInterface } from 'src/comment/models';

export interface UserInterface extends Document {
  _id: string;
  name: string;
  email: string;
  age: number;
  posts: PostInterface;
  comments: CommentInterface;
}
