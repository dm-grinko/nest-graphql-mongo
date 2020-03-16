import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { IComment, CommentObject } from "src/comment/comment.model";
import { IUser, UserObject } from "src/user/user.model";

export interface IPost extends mongoose.Document {
  id: string;
  title: string;
  body: string;
  published: boolean;
  author: IUser;
  comments: IComment;
}

export const PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  published: {type: Boolean, required: true},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true
  },
  comments: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'CommentModel',
    required: false
  }]
});

@ObjectType()
export class PostObject {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  published: boolean;

  @Field(type => UserObject)
  author: UserObject;

  @Field(type => [CommentObject], { nullable: 'items' })
  comments: CommentObject[];
}

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  published: boolean;

  @Field(type => ID)
  author: string;
}

@InputType()
export class UpdatePostInput {
  @Field(type => String, { nullable: true })
  title: string;

  @Field(type => String, { nullable: true })
  body: string;

  @Field(type => Boolean, { nullable: true })
  published: boolean;
}