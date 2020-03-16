import { ObjectType, Field, Int, ID, Float  } from '@nestjs/graphql';
import { Post } from 'src/post/dto/post.dto';
import { Comment } from 'src/comment/dto/comment.dto';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(type => Int, { nullable: true })
  age: number;

  @Field(type => [Post], { nullable: 'items' })
  posts: Post[];

  @Field(type => [Comment], { nullable: 'items' })
  comments: Comment[];
}
