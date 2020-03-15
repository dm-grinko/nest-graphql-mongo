import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
