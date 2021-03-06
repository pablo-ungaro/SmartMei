import {ApolloServer} from 'apollo-server';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import dotenv from 'dotenv'

dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}graphql`);
});