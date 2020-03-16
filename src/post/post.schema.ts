import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  published: {type: Boolean, required: true},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment',
    required: false
  }
});
