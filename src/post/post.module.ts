import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.schema';
import { PostService } from './post.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Posts', schema: PostSchema }
        ])
    ],
    providers: [
        PostResolver,
        PostService
    ] 
})
export class PostModule {

}
