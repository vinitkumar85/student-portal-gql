import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:9000/',
    cache: new InMemoryCache(),
})