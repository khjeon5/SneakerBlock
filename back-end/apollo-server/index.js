import {ApolloServer, makeExecutableSchema} from 'apollo-server'
import mongoose from 'mongoose'
import resolvers from './graphql/resolver'
import fs from 'fs'

const dbName = "" //DB name
const dbpassword = ""
const uri = ``
mongoose.Promise = global.Promise
mongoose.connect(uri, { useNewUrlParser: true })// { useNewUrlParser: true }


const typeDefs = fs.readFileSync(__dirname.concat('/graphql/schema.graphql'), 'utf8')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
