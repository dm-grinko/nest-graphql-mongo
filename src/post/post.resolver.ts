import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post } from "./dto/post.dto";
import { CreatePostInput, UpdatePostInput } from "./inputs/post.input";

@Resolver()
export class PostResolver {
  constructor(
    private postService: PostService
  ) {}

  @Query(returns => [Post])
  async posts(@Args('query') query: string) {
    return this.postService.posts(query);
  }

  @Mutation(returns => Post)
  async createPost(@Args('input') input: CreatePostInput) {
    return this.postService.createPost(input);
  }

  @Mutation(returns => Post)
  async deletePost(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.postService.deletePost(id);
  }

  @Mutation(returns => Post)
  async updatePost(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') newData: UpdatePostInput
  ) {
    return this.postService.updatePost(id, newData);
  }
}
