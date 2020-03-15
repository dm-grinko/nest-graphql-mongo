import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IAccount } from './interfaces/account.interface';
import { AccountInput } from './inputs/account.input';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel('Accounts') private AccountModel: Model<IAccount>
  ) {}
  
  async accounts(): Promise<IAccount[]> {
    return this.AccountModel.find().exec();
  }

  async createAccount(accountInput: AccountInput): Promise<IAccount> {
    const createdAccounts = new this.AccountModel(accountInput);
    return createdAccounts.save();
  }
}
