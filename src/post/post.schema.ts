import * as mongoose from 'mongoose';
import { UserSchema } from 'src/user/user.schema';
import { CommentSchema } from 'src/comment/comment.schema';

export const PostSchema = new mongoose.Schema({
  id: String,
  title: String,
  body: String,
  published: Boolean,
  author: UserSchema,
  comments: [CommentSchema]
});

