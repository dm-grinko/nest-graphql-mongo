import { IPost } from "src/post/interfaces/post.interface";
import { IComment } from "src/comment/interfaces/comment.interface";

export interface IUser {
  id: string;
  name: string;
  email: string;
  age: number;
  posts: IPost;
  comments: IComment;
}
