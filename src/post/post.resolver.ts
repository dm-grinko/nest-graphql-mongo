import { Resolver, Query, Mutation, Args, Int, ID } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post } from "./dto/post.dto";
import { CreatePostInput, UpdatePostInput } from "./inputs/post.input";

@Resolver()
export class PostResolver {
  constructor(
    private postService: PostService
  ) {}

  @Query(returns => [Post], { nullable: 'items' })
  async posts(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.postService.posts(query);
  }

  @Mutation(returns => Post)
  async createPost(@Args('data') data: CreatePostInput) {
    return this.postService.createPost(data);
  }

  @Mutation(returns => Post)
  async deletePost(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.postService.deletePost(id);
  }

  @Mutation(returns => Post)
  async updatePost(
    @Args('data') newData: UpdatePostInput,
    @Args({ name: 'id', type: () => ID }) id: number
  ) {
    return this.postService.updatePost(id, newData);
  }
}
