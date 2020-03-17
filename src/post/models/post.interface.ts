import { Document } from 'mongoose';
import { UserInterface } from 'src/user/models';
import { CommentInterface } from 'src/comment/models';

export interface PostInterface extends Document {
  _id: string;
  title: string;
  body: string;
  published: boolean;
  user: UserInterface;
  comments: CommentInterface;
}
