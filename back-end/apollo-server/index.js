import {ApolloServer, makeExecutableSchema} from 'apollo-server'
import mongoose from 'mongoose'
import resolvers from './graphql/resolver'
import fs from 'fs'

const dbName = "" //DB name
const dbpassword = ""
const uri = `mongodb://playground4:${dbpassword}@cluster0-shard-00-00-2xvk8.gcp.mongodb.net:27017,cluster0-shard-00-01-2xvk8.gcp.mongodb.net:27017,cluster0-shard-00-02-2xvk8.gcp.mongodb.net:27017/${dbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
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
