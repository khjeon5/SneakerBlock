import {ApolloServer, makeExecutableSchema} from 'apollo-server'
import mongoose from 'mongoose'
import resolvers from './graphql/resolver'
import fs from 'fs'


const dbName = "" //DB name
const dbpassword = ""
const uri = `mongodb://Sneakeruser:sneker123%21%40%23@cluster0-shard-00-00-aq6wd.mongodb.net:27017,cluster0-shard-00-01-aq6wd.mongodb.net:27017,cluster0-shard-00-02-aq6wd.mongodb.net:27017/sneakers?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.Promise = global.Promise
mongoose.connect(uri, { useNewUrlParser: true })// { useNewUrlParser: true }


const typeDefs = fs.readFileSync(__dirname.concat('/graphql/schema.graphql'), 'utf8')

const schema = makeExecutableSchema({
    cors: true,
    typeDefs,
    resolvers,
})

const server = new ApolloServer({ schema })




server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
