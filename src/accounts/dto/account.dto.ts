import { ObjectType, Field, ID, Int  } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  email: string;
}
