var { find, filter } = require('lodash');

const authors = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
    { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const posts = [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
    { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const threads = [
    {
        id: "3c93f07a-ec5b-44ab-8ffa-57d8d402d491",
        authorId: 1,
        forum: "7d95f170-a066-4824-b4f6-8b94ddd92276",
        author: "Frederik",
        title: "PVP",
    }
]

const resolvers = {
    Query: {
        posts: () => posts,
        author: (_, { id }) => find(authors, { id }),
    },

    Mutation: {
        upvotePost: (_, { postId }) => {
            const post = find(posts, { id: postId });
            if (!post) {
                throw new Error(`Couldn't find post with id ${postId}`);
            }
            post.votes += 1;
            return post;
        },
    },

    Author: {
        posts: (author, { id }) => {
            let p;
            if (id === undefined) {
                p = posts.filter((post) => post.authorId === author.id);
            } else {
                id = parseInt(id);
                p = posts.filter((post) => post.authorId === author.id && post.id === id);
            }
            return p;
        },
        threads: author => filter(threads, { authorId: author.id })
    },

    Post: {
        author: post => find(authors, { id: post.authorId }),
    },
};

exports.resolvers = resolvers;