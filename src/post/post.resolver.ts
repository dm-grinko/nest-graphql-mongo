import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent, ResolveProperty } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { PostObject, CreatePostInput, UpdatePostInput, PostInterface } from "./post.model";
import { UserService } from "src/user/user.service";
import { CommentService } from "src/comment/comment.service";


@Resolver(of => PostObject)
export class PostResolver {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
  ) {}

  @Query(returns => [PostObject], { nullable: 'items' })
  async getPosts(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.postService.getPosts(query);
  }

  @Mutation(returns => PostObject)
  async createPost(@Args('data') data: CreatePostInput) {
    return this.postService.createPost(data);
  }

  @Mutation(returns => PostObject)
  async deletePost(@Args({ name: '_id', type: () => ID }) _id: number) {
    return this.postService.deletePost(_id);
  }

  @Mutation(returns => PostObject)
  async updatePost(
    @Args('data') newData: UpdatePostInput,
    @Args({ name: '_id', type: () => ID }) _id: number
  ) {
    return this.postService.updatePost(_id, newData);
  }

  @ResolveField()
  async user(@Parent() post: PostObject) {
    const id = post.user._id;
    console.log('user id:', id);
    return this.userService.getUser(id);
  }

  @ResolveField()
  async comments(@Parent() post: PostObject) {
    console.log('post 2', post);
    const { _id } = post;
    return this.commentService.getComments(_id);
  }
}
