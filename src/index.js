import { GraphQLServer } from 'graphql-yoga';
import { rootResolver } from './resolvers';

const server = new GraphQLServer({ typeDefs: './src/schema/schema.graphql',
resolvers: rootResolver })

server.start( () => {
  console.log("Server is up on defualt port 4000 ");
})
