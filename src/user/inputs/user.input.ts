import { InputType, Field, Int  } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(type => String)
  name: string;
  
  @Field(type => String)
  email: string;

  @Field(type => Int, { nullable: true })
  age: number;
}

@InputType()
export class UpdateUserInput {
  @Field(type => String, { nullable: true })
  name: string;
  
  @Field(type => String, { nullable: true })
  email: string;

  @Field(type => Int, { nullable: true })
  age: number;
}
