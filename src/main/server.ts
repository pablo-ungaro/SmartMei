import {ApolloServer} from 'apollo-server';
import {typeDef as userSchema} from './plan/schema'
import {resolver as userResolver} from './plan/resolver'
import dotenv from 'dotenv'

dotenv.config()

const server = new ApolloServer({ typeDefs:userSchema, resolvers:userResolver });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});