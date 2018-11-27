var { find, filter } = require('lodash');
var { database } = require("./database")

const resolvers = {
    Query: {
        forums: () => database.forums,
        forum: (_, { id }) => filter(database.forums, { id: id })
    },

    /*
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
    */
    Forum: {
        parent: (forum) => {
            return find(database.forums, { id: forum.parent });
        },
        threads: (forum, { id }) => {
            let ret;
            if (id === undefined) {
                ret = database.threads.filter((thread) => thread.forumId === forum.id);
            } else {
                ret = database.threads.filter((thread) => thread.forumId === forum.id && thread.id === id);
            }
            return ret;
        }
    },
    Thread: {
        posts: (thread, { id }) => {
            let ret;
            if (id === undefined) {
                ret = filter(database.posts, { threadId: thread.id });
            } else {
                ret = filter(database.posts, { threadId: thread.id, id: id });
            }
            return ret;
        }
    }
};

exports.resolvers = resolvers;