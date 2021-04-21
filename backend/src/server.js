import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const typeDefs = path.join(__dirname, 'graphql/schema.graphql');

export const server = new GraphQLServer({ typeDefs, resolvers });
