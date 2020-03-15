import { ObjectType, Field, Int  } from '@nestjs/graphql';
import { User } from 'src/user/dto/user.dto';
import { Comment } from 'src/comment/dto/comment.dto';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: string;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  published: boolean;

  @Field(type => User)
  author: User;

  @Field(type => [Comment], { nullable: 'items' })
  comments: Comment[];
}
