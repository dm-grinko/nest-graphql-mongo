import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./dto/user.dto";
import { CreateUserInput } from "./inputs/user.input";

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Query(returns => [User])
  async users() {
    return this.userService.users();
  }

  @Mutation(returns => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(input);
  }
}


