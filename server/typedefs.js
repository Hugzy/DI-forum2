const typeDefs =
  /*`
  type Post{
    id: ID!
    author: String
    title: String
    content: String
  }
  
  type Forum{
    id: ID!
    author: String
    name: String
    parent: Forum
    threads(id: ID): [Thread]
  }
  
  type Thread{
    id: ID!
    forum: Forum!
    author: String
    posts(id: ID): [Post]
  }
  
  type Query{
    getForum(id: ID!): Forum
    getThreads(id: ID!): Thread
  }
  `
  */
  `
  type Post {
    id: ID!
    title: String
    author: String
    votes: Int
  }

  type Thread{
    id: ID!
    author: String
    title: String
    posts(id: ID): [Post]
  }

  type Forum{
    id: ID!
    author: String
    name: String
    parent: Forum
    threads(id: ID): [Thread]
  }

  # the schema allows the following query:
  type Query {
    forum(id: ID!): [Forum]
    forums: [Forum]
  }

`;

exports.typeDefs = typeDefs;