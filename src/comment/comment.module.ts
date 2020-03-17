import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './comment.model';
import { CommentService } from './comment.service';
import { UserSchema } from 'src/user/user.model';
import { PostSchema } from 'src/post/post.model';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Users', schema: UserSchema },
            { name: 'Posts', schema: PostSchema },
            { name: 'Comments', schema: CommentSchema },
        ])
    ],
    providers: [
        CommentResolver,
        CommentService,
        PostService,
        UserService
    ] 
})
export class CommentModule {

}
