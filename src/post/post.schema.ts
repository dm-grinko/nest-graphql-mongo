import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  published: {type: Boolean, required: true},
  author: {type: mongoose.Types.ObjectId, required: true},
  comments: {type: [mongoose.Types.ObjectId], required: false}
});

