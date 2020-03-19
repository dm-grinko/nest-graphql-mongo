import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PostService } from './post.service';
import { PostSchema } from './models';
import { UserSchema } from '../user/models';
import { CommentSchema } from '../comment/models';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';
import { SharedModule } from '../shared/shared.module';

@Module({
    imports:[
        SharedModule,
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
