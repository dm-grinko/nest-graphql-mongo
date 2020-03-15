import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post } from "./dto/post.dto";
import { CreatePostInput } from "./inputs/post.input";

@Resolver()
export class PostResolver {
  constructor(
    private postService: PostService
  ) {}

  @Query(() => [Post])
  async posts() {
    return this.postService.posts();
  }

  @Mutation(() => Post)
  async createPost(@Args('input') input: CreatePostInput) {
    return this.postService.createPost(input);
  }
}
