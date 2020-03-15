import { InputType, Field, Int  } from '@nestjs/graphql';

@InputType()
export class AccountInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  email: string;
}
