import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  published: { type: Boolean, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true,
  },
  comments: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'commentModel',
      required: false,
    },
  ],
});
