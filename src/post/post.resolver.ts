import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent, ResolveProperty } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post, CreatePostInput, UpdatePostInput, PostInterface } from "./post.model";
import { UserService } from "src/user/user.service";
import { CommentService } from "src/comment/comment.service";


@Resolver(of => Post)
export class PostResolver {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
  ) {}

  @Query(returns => [Post], { nullable: 'items' })
  async getPosts(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.postService.getPosts(query);
  }

  @Mutation(returns => Post)
  async createPost(@Args('data') data: CreatePostInput) {
    return this.postService.createPost(data);
  }

  @Mutation(returns => Post)
  async deletePost(@Args({ name: '_id', type: () => ID }) _id: number) {
    return this.postService.deletePost(_id);
  }

  @Mutation(returns => Post)
  async updatePost(
    @Args('data') newData: UpdatePostInput,
    @Args({ name: '_id', type: () => ID }) _id: number
  ) {
    return this.postService.updatePost(_id, newData);
  }

  @ResolveField()
  async user(@Parent() post: Post) {
    const { _id } = post.user;
    return this.userService.getUser(_id);
  }

  @ResolveField()
  async comments(@Parent() post: Post) {
    const { _id } = post;
    return this.commentService.getComments(_id);
  }
}
