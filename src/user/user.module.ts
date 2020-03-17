import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { PostSchema } from 'src/post/post.schema';
import { CommentSchema } from 'src/comment/comment.schema';
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
