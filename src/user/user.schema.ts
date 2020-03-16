import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  age: {type: Number, default: null},
  posts: {type: [mongoose.Types.ObjectId], required: false},
  comments: {type: [mongoose.Types.ObjectId], required: false}
});

