import { Resolver, Query, Mutation, Args, Int, ID } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { PostObject, CreatePostInput, UpdatePostInput } from "./post.model";


@Resolver('Posts')
export class PostResolver {
  constructor(
    private postService: PostService
  ) {}

  @Query(returns => [PostObject], { nullable: 'items' })
  async posts(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.postService.posts(query);
  }

  @Mutation(returns => PostObject)
  async createPost(@Args('data') data: CreatePostInput) {
    return this.postService.createPost(data);
  }

  @Mutation(returns => PostObject)
  async deletePost(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.postService.deletePost(id);
  }

  @Mutation(returns => PostObject)
  async updatePost(
    @Args('data') newData: UpdatePostInput,
    @Args({ name: 'id', type: () => ID }) id: number
  ) {
    return this.postService.updatePost(id, newData);
  }
}
