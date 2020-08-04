import { GraphQLServer } from 'graphql-yoga'
import { Context } from './utils'

const __mock__ = [{
  id: 0,
  title: 'Hello',
  content: '123123'
},{
  id: 1,
  title: 'Hello',
  content: '123123'
},{
  id: 2,
  title: 'Hello',
  content: '123123'
}]

const resolvers = {
  Query: {
    getPosts(parent, args, context: Context) {
      console.log({
        parent,
        args,
        context
      })
      return __mock__
    },
    getPost(parent, { id }) {
      return __mock__[id]
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {},
})

server.start(() => console.log('Server is running on http://localhost:4000'))
