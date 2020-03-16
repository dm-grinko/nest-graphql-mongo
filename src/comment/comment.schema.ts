import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  text: {type: String, required: true},
  author: {type: mongoose.Types.ObjectId, required: true},
  post: {type: mongoose.Types.ObjectId, required: true}
});
