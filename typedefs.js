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
type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts(id: ID): [Post]
    threads: [Thread]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  type Thread{
    id: ID!
    authorId: Int
    forumId: String!
    author: String
    title: String
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

exports.typeDefs = typeDefs;