
import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from "src/post/models";
import { Comment } from "src/comment/models";


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