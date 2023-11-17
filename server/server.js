import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {readFile} from 'node:fs/promises';
import {resolvers} from './resolvers.js'

const typeDefs = await readFile('./schema.graphql', 'utf8');

const apolloServer = new ApolloServer({typeDefs, resolvers});

const info = await startStandaloneServer(apolloServer, {listen: {port: '9000'}});

console.log(`Server running at ${info.url}`);