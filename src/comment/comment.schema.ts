import * as mongoose from 'mongoose';
import { UserSchema } from 'src/user/user.schema';
import { PostSchema } from 'src/post/post.schema';

export const CommentSchema = new mongoose.Schema({
  id: String,
  text: String,
  author: UserSchema,
  post: PostSchema,
});
