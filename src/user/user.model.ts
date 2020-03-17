import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';
import { PostInterface, Post } from "src/post/post.model";
import { CommentInterface, Comment } from "src/comment/comment.model";

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
export class User {
  @Field(type => ID)
  readonly _id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly email: string;

  @Field(type => Int, { nullable: true })
  readonly age: number;

  @Field(type => [Post], { nullable: 'items' })
  readonly posts: Post[];

  @Field(type => [Comment], { nullable: 'items' })
  readonly comments: Comment[];
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