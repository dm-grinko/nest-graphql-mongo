import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { UserInterface, UserObject } from "src/user/user.model";
import { PostInterface, PostObject } from "src/post/post.model";

export interface CommentInterface extends mongoose.Document {
  _id: string;
  text: string;
  user: UserInterface;
  post: PostInterface;
}

export const CommentSchema = new mongoose.Schema({
  text: {type: String, required: true},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'postModel',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'postModel',
    required: true
  }
});

@ObjectType()
export class CommentObject {
  @Field(type => ID)
  readonly _id: string;

  @Field()
  readonly text: string;
  
  @Field(type => UserObject)
  readonly user: UserObject;

  @Field(type => PostObject)
  readonly post: PostObject;
}

@InputType()
export class CreateCommentInput {
  @Field()
  readonly text: string;

  @Field(type => ID)
  readonly user: string;

  @Field(type => ID)
  readonly post: string;
}

@InputType()
export class UpdateCommentInput {
  @Field(type => String, { nullable: true })
  readonly text: string;
}

