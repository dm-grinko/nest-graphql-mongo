import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { User } from "../../user/models";
import { Post } from "../../post/models";

@ObjectType()
export class Comment {
  @Field(type => ID)
  readonly _id: string;

  @Field()
  readonly text: string;
  
  @Field(type => User)
  readonly user: User;

  @Field(type => Post)
  readonly post: Post;
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

