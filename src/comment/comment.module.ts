import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './comment.model';
import { CommentService } from './comment.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Comments', schema: CommentSchema }
        ])
    ],
    providers: [
        CommentResolver,
        CommentService
    ] 
})
export class CommentModule {

}
