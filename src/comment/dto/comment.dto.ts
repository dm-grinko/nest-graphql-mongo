import { ObjectType, Field, Int  } from '@nestjs/graphql';
import { User } from 'src/user/dto/user.dto';
import { Post } from 'src/post/dto/post.dto';

@ObjectType()
export class Comment {
  @Field(type => Int)
  id: string;

  @Field()
  text: string;
  
  @Field(type => User)
  author: User;

  @Field(type => Post)
  post: Post;
}
