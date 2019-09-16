import { GraphQLServer } from 'graphql-yoga'
import rootResolver from './resolvers'
import { config } from './env.config'
import rootSchema from './schema/rootSchema'

const server = new GraphQLServer({
  typeDefs: rootSchema,
  resolvers: rootResolver
})

server.start({ port: config.PORT }, () => {
  console.log(`Server Started as ${config.PORT}`)
})
