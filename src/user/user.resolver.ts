import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./dto/user.dto";
import { CreateUserInput } from "./inputs/user.input";

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Query(returns => [User])
  async users(@Args('query') query: string) {
    return this.userService.users(query);
  }

  @Mutation(returns => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(returns => User)
  async deleteUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.deleteUser(id);
  }

  @Mutation(returns => User)
  async updateUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.updateUser(id);
  }
}


