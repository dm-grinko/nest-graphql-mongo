import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentResolver } from './comment.resolver';
import { CommentSchema } from './comment.schema';
import { UserSchema } from 'src/user/user.schema';
import { PostSchema } from 'src/post/post.schema';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';
import { CommentService } from './comment.service';

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
