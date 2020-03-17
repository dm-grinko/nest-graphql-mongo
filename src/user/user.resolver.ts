import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { UserObject, CreateUserInput, UpdateUserInput } from "./user.model";
import { CommentService } from "src/comment/comment.service";
import { PostService } from "src/post/post.service";

@Resolver(of => UserObject)
export class UserResolver {
  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private postService: PostService,
  ) {}

  @Query(returns => UserObject, { nullable: true })
  async getUser(@Args({
    name: '_id',
    type: () => ID
  }) _id: string) {
    return this.userService.getUser(_id);
  }

  @Query(returns => [UserObject], { nullable: 'items' })
  async getUsers(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query?: string) {
    return this.userService.getUsers(query);
  }

  @Mutation(returns => UserObject)
  async createUser(@Args('data') data: CreateUserInput) {
    return this.userService.createUser(data);
  }

  @Mutation(returns => UserObject)
  async deleteUser(@Args({ name: '_id', type: () => ID }) _id: number) {
    return this.userService.deleteUser(_id);
  }

  @Mutation(returns => UserObject)
  async updateUser(
    @Args('data') newData: UpdateUserInput,
    @Args({ name: '_id', type: () => ID }) _id: number,
  ) {
    return this.userService.updateUser(_id, newData);
  }

  @ResolveField()
  async posts(@Parent() user: UserObject) {
    console.log('user 1', user);
    const { _id } = user;
    return this.postService.getPosts(_id);
  }

  @ResolveField()
  async comments(@Parent() user: UserObject) {
    console.log('user 2', user);
    const { _id } = user;
    return this.commentService.getComments(_id);
  }
}


