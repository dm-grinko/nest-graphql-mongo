import { InputType, Field, Int, ID  } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  text: string;

  @Field(type => ID)
  author: string;

  @Field(type => ID)
  post: string;
}

@InputType()
export class UpdateCommentInput {
  @Field()
  text: string;
}
