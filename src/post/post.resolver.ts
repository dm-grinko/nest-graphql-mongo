import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post, CreatePostInput, UpdatePostInput } from "./models";
import { UserService } from "../user/user.service";
import { CommentService } from "../comment/comment.service";

@Resolver(of => Post)
export class PostResolver {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  @Query(returns => Post, { nullable: true })
  async getPost(@Args({ name: '_id', type: () => ID}) _id: string) {
    return this.postService.getPost(_id);
  }

  @Query(returns => [Post], { nullable: 'items' })
  async getPosts(
    @Args({name: 'query', type: () => String, nullable: true}) query?: string) {
    return this.postService.getPosts(query);
  }

  @Mutation(returns => Post)
  async createPost(@Args('data') data: CreatePostInput) {
    return this.postService.createPost(data);
  }

  @Mutation(returns => Post)
  async deletePost(@Args({ name: '_id', type: () => ID }) id: number) {
    return this.postService.deletePost(id);
  }

  @Mutation(returns => Post)
  async updatePost(
    @Args('data') data: UpdatePostInput,
    @Args({ name: '_id', type: () => ID }) id: number
  ) {
    return this.postService.updatePost(id, data);
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
