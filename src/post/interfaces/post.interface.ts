import { IUser } from "src/user/interfaces/user.interface";
import { IComment } from "src/comment/interfaces/comment.interface";

export interface IPost {
  id: string;
  title: string;
  body: string;
  published: boolean;
  author: IUser;
  comments: IComment;
}
