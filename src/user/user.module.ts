import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models';
import { PostSchema } from '../post/models';
import { CommentSchema } from '../comment/models';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';
import { PostService } from '../post/post.service';
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
        UserResolver,
        UserService,
        CommentService,
        PostService
    ] 
})
export class UserModule {

}
