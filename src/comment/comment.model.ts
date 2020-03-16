import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { IUser, UserObject } from "src/user/user.model";
import { IPost, PostObject } from "src/post/post.model";

export interface IComment extends mongoose.Document {
  id: string;
  text: string;
  author: IUser;
  post: IPost;
}

export const CommentSchema = new mongoose.Schema({
  text: {type: String, required: true},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostModel',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostModel',
    required: true
  }
});

@ObjectType()
export class CommentObject {
  @Field(type => ID)
  id: string;

  @Field()
  text: string;
  
  @Field(type => UserObject)
  author: UserObject;

  @Field(type => PostObject)
  post: PostObject;
}

@InputType()
export class CreateCommentInput {
  @Field()
  text: string;

  @Field(type => ID)
  author: string;

  @Field(type => ID)
  post: string;
}

@InputType()
export class UpdateCommentInput {
  @Field(type => String, { nullable: true })
  text: string;
}

