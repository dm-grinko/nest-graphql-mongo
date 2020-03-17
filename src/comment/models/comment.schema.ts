import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'postModel',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'postModel',
    required: true,
  },
});
