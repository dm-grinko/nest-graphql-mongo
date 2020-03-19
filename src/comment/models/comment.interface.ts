import { Document } from 'mongoose';
import { UserInterface } from '../../user/models';
import { PostInterface } from '../../post/models';

export interface CommentInterface extends Document {
  _id: string;
  text: string;
  user: UserInterface;
  post: PostInterface;
}
