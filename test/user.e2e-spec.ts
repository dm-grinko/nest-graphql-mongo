import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';
import { ApolloServerTestClient } from 'apollo-server-testing';
import { AppModule } from '../src/app.module';
import fetch from 'node-fetch';
import config from '../src/environments/environment';

describe('User', () => {
  let app: INestApplication;
  let apolloClient: ApolloServerTestClient;

  beforeAll(async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    apolloClient = new ApolloClient({
      uri: `http://127.0.0.1:${config.port}/graphql`,
      fetch: fetch as any,
      cache: new InMemoryCache({
        addTypename: false,
      }),
    });
    app = testingModule.createNestApplication();
    await app.listen(config.port + 1);
  });

  it('should get users', async () => {
    const { query } = apolloClient;
    const result: any = await query({
      query: gql`query {
        getUsers {
          _id
        }
      }`,
      variables: {},
    });
    console.log(result.data.getUsers[0]);
  });
});
