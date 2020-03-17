import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models';
import { PostSchema } from 'src/post/models';
import { CommentSchema } from 'src/comment/models';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { PostService } from 'src/post/post.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Users', schema: UserSchema },
            { name: 'Posts', schema: PostSchema },
            { name: 'Comments', schema: CommentSchema },
        ])
    ],
    providers: [
        UserResolver,
        UserService,
        CommentService,
        PostService
    ] 
})
export class UserModule {

}
