import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentResolver } from './comment.resolver';
import { CommentSchema } from './models';
import { UserSchema } from 'src/user/models';
import { PostSchema } from 'src/post/models';
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
