import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { CreateCommentInput, UpdateCommentInput, Comment } from "./comment.model";
import { PostService } from "src/post/post.service";
import { UserService } from "src/user/user.service";

@Resolver(of => Comment)
export class CommentResolver {
  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private userService: UserService,
  ) {}


  @Query(returns => Comment, { nullable: true })
  async getComment(
    @Args({name: '_id', type: () => ID}) id: string) {
    return this.commentService.getComment(id);
  }

  @Query(returns => [Comment], { nullable: 'items' })
  async getComments(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.commentService.getComments(query);
  }

  @Mutation(returns => Comment)
  async createComment(@Args('data') data: CreateCommentInput) {
    return this.commentService.createComment(data);
  }

  @Mutation(returns => Comment)
  async deleteComment(@Args({ name: '_id', type: () => ID }) id: number) {
    return this.commentService.deleteComment(id);
  }

  @Mutation(returns => Comment)
  async updateComment(
    @Args('data') data: UpdateCommentInput,
    @Args({ name: '_id', type: () => ID }) id: number,
  ) {
    return this.commentService.updateComment(id, data);
  }

  @ResolveField()
  async post(@Parent() comment: Comment) {
    const { _id } = comment;
    return this.postService.getPost(_id);
  }

  @ResolveField()
  async user(@Parent() comment: Comment) {
    const { _id } = comment;
    return this.userService.getUser(_id);
  }
}
