import { InputType, Field, Int  } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
  
  @Field()
  email: string;

  @Field()
  age: number;
}

@InputType()
export class UpdateUserInput {
  @Field()
  name: string;
  
  @Field()
  email: string;

  @Field()
  age: number;
}
