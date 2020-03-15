import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { Comment } from "./dto/comment.dto";
import { CreateCommentInput, UpdateCommentInput } from "./inputs/comment.input";

@Resolver()
export class CommentResolver {
  constructor(
    private commentService: CommentService
  ) {}

  @Query(returns => [Comment])
  async comments(@Args('query') query: string) {
    return this.commentService.comments(query);
  }

  @Mutation(returns => Comment)
  async createComment(@Args('input') input: CreateCommentInput) {
    return this.commentService.createComment(input);
  }

  @Mutation(returns => Comment)
  async deleteComment(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.commentService.deleteComment(id);
  }

  @Mutation(returns => Comment)
  async updateComment(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') newData: UpdateCommentInput
  ) {
    return this.commentService.updateComment(id, newData);
  }
}
