import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { Comment } from "./dto/comment.dto";
import { CreateCommentInput } from "./inputs/comment.input";

@Resolver()
export class CommentResolver {
  constructor(
    private commentService: CommentService
  ) {}

  @Query(() => [Comment])
  async comments() {
    return this.commentService.comments();
  }

  @Mutation(() => Comment)
  async createComment(@Args('input') input: CreateCommentInput) {
    return this.commentService.createComment(input);
  }
}
