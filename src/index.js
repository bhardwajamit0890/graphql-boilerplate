import { GraphQLServer } from 'graphql-yoga'
import { rootResolver } from './resolvers'
import { config } from '../config/env.config'

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers: rootResolver
})

server.start({ port: config.PORT }, () => {
  console.log(`Server Started as ${config.PORT}`)
})
