import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { Comment } from "src/comment/models";
import { User } from "src/user/models";

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