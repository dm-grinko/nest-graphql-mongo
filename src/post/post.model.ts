import * as mongoose from 'mongoose';
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { CommentInterface, Comment } from "src/comment/comment.model";
import { UserInterface, User } from "src/user/user.model";

export interface PostInterface extends mongoose.Document {
  _id: string;
  title: string;
  body: string;
  published: boolean;
  user: UserInterface;
  comments: CommentInterface;
}

export const PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  published: {type: Boolean, required: true},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true
  },
  comments: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'commentModel',
    required: false
  }]
});

@ObjectType()
export class Post {
  @Field(type => ID)
  readonly _id: string;

  @Field()
  readonly title: string;

  @Field()
  readonly body: string;

  @Field()
  readonly published: boolean;

  @Field(type => User)
  readonly user: User;

  @Field(type => [Comment], { nullable: 'items' })
  readonly comments: Comment[];
}

@InputType()
export class CreatePostInput {
  @Field()
  readonly title: string;

  @Field()
  readonly body: string;

  @Field()
  readonly published: boolean;

  @Field(type => ID)
  readonly user: string;
}

@InputType()
export class UpdatePostInput {
  @Field(type => String, { nullable: true })
  readonly title: string;

  @Field(type => String, { nullable: true })
  readonly body: string;

  @Field(type => Boolean, { nullable: true })
  readonly published: boolean;
}