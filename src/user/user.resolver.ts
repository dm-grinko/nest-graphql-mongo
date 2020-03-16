import { Resolver, Query, Mutation, Args, Int, ID } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { UserObject, CreateUserInput, UpdateUserInput } from "./user.model";

@Resolver('Users')
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Query(returns => UserObject, { nullable: true })
  async user(@Args({
    name: 'id',
    type: () => ID
  }) id: string) {
    return this.userService.user(id);
  }

  @Query(returns => [UserObject], { nullable: 'items' })
  async users(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query?: string) {
    return this.userService.users(query);
  }

  @Mutation(returns => UserObject)
  async createUser(@Args('data') data: CreateUserInput) {
    return this.userService.createUser(data);
  }

  @Mutation(returns => UserObject)
  async deleteUser(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.userService.deleteUser(id);
  }

  @Mutation(returns => UserObject)
  async updateUser(
    @Args('data') newData: UpdateUserInput,
    @Args({ name: 'id', type: () => ID }) id: number,
  ) {
    return this.userService.updateUser(id, newData);
  }
}


