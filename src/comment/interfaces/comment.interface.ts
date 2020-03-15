import { IUser } from "src/user/interfaces/user.interface";
import { IPost } from "src/post/interfaces/post.interface";

export interface IComment {
  id: string;
  text: string;
  author: IUser;
  post: IPost;
}
