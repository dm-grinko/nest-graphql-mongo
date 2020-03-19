import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentResolver } from './comment.resolver';
import { CommentSchema } from './models';
import { UserSchema } from '../user/models';
import { PostSchema } from '../post/models';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
import { CommentService } from './comment.service';
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
        CommentResolver,
        CommentService,
        PostService,
        UserService
    ] 
})
export class CommentModule {

}
