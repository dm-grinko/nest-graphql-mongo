import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';
import { IPost, PostObject } from "src/post/post.model";
import { IComment, CommentObject } from "src/comment/comment.model";

export interface IUser extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  age: number;
  posts: IPost;
  comments: IComment;
}

export const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  age: {type: Number, default: null},
  posts: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'PostModel',
    required: false
  }],
  comments: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'CommentModel',
    required: false
  }]
});

@ObjectType()
export class UserObject {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(type => Int, { nullable: true })
  age: number;

  @Field(type => [PostObject], { nullable: 'items' })
  posts: PostObject[];

  @Field(type => [CommentObject], { nullable: 'items' })
  comments: CommentObject[];
}

@InputType()
export class CreateUserInput {
  @Field(type => String)
  name: string;
  
  @Field(type => String)
  email: string;

  @Field(type => Int, { nullable: true })
  age: number;
}

@InputType()
export class UpdateUserInput {
  @Field(type => String, { nullable: true })
  name: string;
  
  @Field(type => String, { nullable: true })
  email: string;

  @Field(type => Int, { nullable: true })
  age: number;
}