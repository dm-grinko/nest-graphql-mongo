import { InputType, Field, Int, ID  } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  published: boolean;

  @Field(type => ID)
  author: string;
}

@InputType()
export class UpdatePostInput {
  @Field()
  title: string;

  @Field()
  body: number;

  @Field()
  published: boolean;
}
