import { Resolver, Query, Mutation, Args, Int, ID } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { CreateCommentInput, UpdateCommentInput, CommentObject } from "./comment.model";

@Resolver('Comments')
export class CommentResolver {
  constructor(
    private commentService: CommentService
  ) {}

  @Query(returns => [CommentObject], { nullable: 'items' })
  async comments(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.commentService.comments(query);
  }

  @Mutation(returns => CommentObject)
  async createComment(@Args('data') data: CreateCommentInput) {
    return this.commentService.createComment(data);
  }

  @Mutation(returns => CommentObject)
  async deleteComment(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.commentService.deleteComment(id);
  }

  @Mutation(returns => CommentObject)
  async updateComment(
    @Args('data') data: UpdateCommentInput,
    @Args({ name: 'id', type: () => ID }) id: number,
  ) {
    return this.commentService.updateComment(id, data);
  }
}
