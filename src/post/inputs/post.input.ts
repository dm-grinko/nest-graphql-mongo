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
  @Field(type => String, { nullable: true })
  title: string;

  @Field(type => String, { nullable: true })
  body: string;

  @Field(type => Boolean, { nullable: true })
  published: boolean;
}
