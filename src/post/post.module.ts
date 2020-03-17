import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PostService } from './post.service';
import { PostSchema } from './post.model';
import { UserSchema } from 'src/user/user.model';
import { CommentSchema } from 'src/comment/comment.model';
import { UserService } from 'src/user/user.service';
import { CommentService } from 'src/comment/comment.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Users', schema: UserSchema },
            { name: 'Posts', schema: PostSchema },
            { name: 'Comments', schema: CommentSchema },
        ])
    ],
    providers: [
        PostResolver,
        PostService,
        UserService,
        CommentService
    ] 
})
export class PostModule {

}
