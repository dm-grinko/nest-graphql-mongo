import * as mongoose from 'mongoose';
import { PostSchema } from 'src/post/post.schema';
import { CommentSchema } from 'src/comment/comment.schema';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  age: Number,
  posts: [PostSchema],
  comments: [CommentSchema],
});

