import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AccountService } from "./account.service";
import { Account } from "./dto/account.dto";
import { AccountInput } from "./inputs/account.input";

@Resolver()
export class AccountResolver {
  constructor(
    private accountService: AccountService
  ) {}

  @Query(() => [Account])
  async accounts() {
    return this.accountService.accounts();
  }

  @Mutation(() => Account)
  async createAccount(@Args('input') input: AccountInput) {
    return this.accountService.createAccount(input);
  }
}
