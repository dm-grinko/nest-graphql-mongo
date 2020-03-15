import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './account.schema';
import { AccountService } from './account.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Accounts', schema: AccountSchema }
        ])
    ],
    providers: [
        AccountResolver,
        AccountService
    ] 
})
export class AccountModule {

}
