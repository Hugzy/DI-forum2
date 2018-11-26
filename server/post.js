var { fakeDatabase } = require("./database")

class Post {
    constructor(id, { author, forum, content }) {
        this.id = id;
        this.author = author;
        this.forum = forum;
        this.content = content;
    }
}

exports.getPost = ({ id }) => {
    let post = fakeDatabase[id];
    //console.log(fakeDatabase);
    //console.log(post)
    if (!post) {
        throw new console.error("No message exists with id " + id);
    }
    let p = new Post(id, post);
    console.log(p);
    return p
}