import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User, CreateUserInput, UpdateUserInput } from "./models";
import { CommentService } from "src/comment/comment.service";
import { PostService } from "src/post/post.service";

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private postService: PostService,
  ) {}

  @Query(returns => User, { nullable: true })
  async getUser(@Args({name: '_id', type: () => ID}) _id: string) {
    return this.userService.getUser(_id);
  }

  @Query(returns => [User], { nullable: 'items' })
  async getUsers(
    @Args({name: 'query', type: () => String, nullable: true}) query?: string) {
    return this.userService.getUsers(query);
  }

  @Mutation(returns => User)
  async createUser(@Args('data') data: CreateUserInput) {
    return this.userService.createUser(data);
  }

  @Mutation(returns => User)
  async deleteUser(@Args({ name: '_id', type: () => ID }) _id: number) {
    return this.userService.deleteUser(_id);
  }

  @Mutation(returns => User)
  async updateUser(
    @Args('data') data: UpdateUserInput,
    @Args({ name: '_id', type: () => ID }) _id: number,
  ) {
    return this.userService.updateUser(_id, data);
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    const { _id } = user;
    return this.postService.getPosts(_id);
  }

  @ResolveField()
  async comments(@Parent() user: User) {
    const { _id } = user;
    return this.commentService.getComments(_id);
  }
}


