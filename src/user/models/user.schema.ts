import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, default: null },
  posts: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'postModel',
      required: false,
    },
  ],
  comments: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'commentModel',
      required: false,
    },
  ],
});
