import { INestApplication } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import {
  ApolloServerTestClient,
  createTestClient,
} from 'apollo-server-testing';
import gql from 'graphql-tag';
import { UserModule } from '../src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../src/environments/environment';

describe('User', () => {
  let app: INestApplication;
  let apolloClient: ApolloServerTestClient;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule, MongooseModule.forRoot(config.mongoURI)],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const module: GraphQLModule = moduleFixture.get<GraphQLModule>(
      GraphQLModule,
    );
    apolloClient = createTestClient((module as any).apolloServer);
  });

  it('should get users', async () => {
    const { query } = apolloClient;
    const result: any = await query({
      query: gql`
        query {
          getUsers {
            _id
            name
          }
        }
      `,
      variables: {},
    });
    console.log(result);
  });
});
