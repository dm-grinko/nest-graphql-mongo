import { ObjectType, Field, Int, ID  } from '@nestjs/graphql';
import { User } from 'src/user/dto/user.dto';
import { Post } from 'src/post/dto/post.dto';

@ObjectType()
export class Comment {
  @Field(type => ID)
  id: string;

  @Field()
  text: string;
  
  @Field(type => User)
  author: User;

  @Field(type => Post)
  post: Post;
}
