import { Provider } from '@nestjs/common';
import { PubSub } from 'apollo-server-express';

export const PUB_SUB = 'PUB_SUB';

export const SubscriptionsProvider: Provider = {
    provide: PUB_SUB,
    useValue: new PubSub(),
};