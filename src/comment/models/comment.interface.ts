import { Document } from 'mongoose';
import { UserInterface } from 'src/user/models';
import { PostInterface } from 'src/post/models';

export interface CommentInterface extends Document {
    _id: string;
    text: string;
    user: UserInterface;
    post: PostInterface;
  }