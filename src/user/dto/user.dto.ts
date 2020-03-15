import { ObjectType, Field, Int  } from '@nestjs/graphql';
import { Post } from 'src/post/dto/post.dto';
import { Comment } from 'src/comment/dto/comment.dto';

@ObjectType()
export class User {
  @Field(type => Int)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(type => Int, { nullable: true })
  age?: number;

  @Field(type => [Post], { nullable: 'items' })
  posts: Post[];

  @Field(type => [Comment], { nullable: 'items' })
  comments: Comment[];
}
