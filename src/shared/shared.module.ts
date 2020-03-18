import { Module } from '@nestjs/common';
import { SubscriptionsProvider } from './subscriptions.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [
    SubscriptionsProvider
  ],
  exports: [
    SubscriptionsProvider
  ]
})
export class SharedModule {}