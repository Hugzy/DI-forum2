var express = require('express');
var graphqlHTTP = require('express-graphql');
var { makeExecutableSchema } = require('graphql-tools');
var { typeDefs } = require('./typedefs')
var { resolvers } = require('./resolvers')
var cors = require('cors')


// Construct a schema, using GraphQL schema language
var schema = makeExecutableSchema({
  typeDefs,
  resolvers
}
);

var app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');