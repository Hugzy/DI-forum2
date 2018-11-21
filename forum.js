var { fakeDatabase } = require("./database")

class Forum {
    constructor(id, { author, name, parent, threads }) {
        this.id = id;
        this.author = author;
        this.parent = parent;
        this.name = name;
        this.threads = threads
    }
}

exports.getForum = ({ id }) => {
    //console.log(id);

    let forum = fakeDatabase.find((forum) => {
        return forum.id === id;
    });
    if (!forum) {
        throw new console.error("No message exists with id " + id);
    }
    let f = new Forum(id, forum);
    return f
}