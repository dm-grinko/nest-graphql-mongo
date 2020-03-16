import { Resolver, Query, Mutation, Args, Int, ID } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { Comment } from "./dto/comment.dto";
import { CreateCommentInput, UpdateCommentInput } from "./inputs/comment.input";

@Resolver()
export class CommentResolver {
  constructor(
    private commentService: CommentService
  ) {}

  @Query(returns => [Comment], { nullable: 'items' })
  async comments(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.commentService.comments(query);
  }

  @Mutation(returns => Comment)
  async createComment(@Args('data') data: CreateCommentInput) {
    return this.commentService.createComment(data);
  }

  @Mutation(returns => Comment)
  async deleteComment(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.commentService.deleteComment(id);
  }

  @Mutation(returns => Comment)
  async updateComment(
    @Args('data') data: UpdateCommentInput,
    @Args({ name: 'id', type: () => ID }) id: number,
  ) {
    return this.commentService.updateComment(id, data);
  }
}
