import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { CreateCommentInput, UpdateCommentInput, CommentObject } from "./comment.model";
import { PostService } from "src/post/post.service";
import { UserService } from "src/user/user.service";

@Resolver(of => CommentObject)
export class CommentResolver {
  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private userService: UserService,
  ) {}

  @Query(returns => [CommentObject], { nullable: 'items' })
  async getComments(@Args({
    name: 'query',
    type: () => String,
    nullable: true
  }) query: string) {
    return this.commentService.getComments(query);
  }

  @Mutation(returns => CommentObject)
  async createComment(@Args('data') data: CreateCommentInput) {
    return this.commentService.createComment(data);
  }

  @Mutation(returns => CommentObject)
  async deleteComment(@Args({ name: '_id', type: () => ID }) _id: number) {
    return this.commentService.deleteComment(_id);
  }

  @Mutation(returns => CommentObject)
  async updateComment(
    @Args('data') data: UpdateCommentInput,
    @Args({ name: '_id', type: () => ID }) _id: number,
  ) {
    return this.commentService.updateComment(_id, data);
  }

  @ResolveField()
  async post(@Parent() comment: CommentObject) {
    console.log('comment 1', comment);
    const { _id } = comment;
    return this.postService.getPost(_id);
  }

  @ResolveField()
  async user(@Parent() comment: CommentObject) {
    console.log('comment 2', comment);
    const { _id } = comment;
    return this.userService.getUser(_id);
  }
}
