import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';
import { PostInterface, PostObject } from "src/post/post.model";
import { CommentInterface, CommentObject } from "src/comment/comment.model";

export interface UserInterface extends mongoose.Document {
  _id: string;
  name: string;
  email: string;
  age: number;
  posts: PostInterface;
  comments: CommentInterface;
}

export const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  age: {type: Number, default: null},
  posts: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'postModel',
    required: false
  }],
  comments: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'commentModel',
    required: false
  }]
});

@ObjectType()
export class UserObject {
  @Field(type => ID)
  readonly _id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly email: string;

  @Field(type => Int, { nullable: true })
  readonly age: number;

  @Field(type => [PostObject], { nullable: 'items' })
  readonly posts: PostObject[];

  @Field(type => [CommentObject], { nullable: 'items' })
  readonly comments: CommentObject[];
}

@InputType()
export class CreateUserInput {
  @Field(type => String)
  readonly name: string;
  
  @Field(type => String)
  readonly email: string;

  @Field(type => Int, { nullable: true })
  readonly age: number;
}

@InputType()
export class UpdateUserInput {
  @Field(type => String, { nullable: true })
  readonly name: string;
  
  @Field(type => String, { nullable: true })
  readonly email: string;

  @Field(type => Int, { nullable: true })
  readonly age: number;
}