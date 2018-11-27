exports.database = {
    forums: [{
            id: "7d95f170-a066-4824-b4f6-8b94ddd92276",
            author: "Author A",
            name: "Forum 1",
            parent: null
        },
        {
            id: "a5456efd-360c-4c91-b7ad-9690419e0509",
            author: "Author B",
            name: "Forum 2",
            parent: "7d95f170-a066-4824-b4f6-8b94ddd92276"
        },
        {
            id: "f094cabf-44b9-4559-ae9d-f809c54f295a",
            author: "Author C",
            name: "Forum 3",
            parent: null
        }
    ],
    threads: [{
            id: "3c93f07a-ec5b-44ab-8ffa-57d8d402d491",
            forumId: "7d95f170-a066-4824-b4f6-8b94ddd92276",
            author: "Author D",
            title: "Thread 1"
        },
        {
            id: "f65c35ce-8b87-4384-bef1-dd99d0ab26c1",
            forumId: "7d95f170-a066-4824-b4f6-8b94ddd92276",
            author: "Author E",
            title: "Thread 2"
        },
        {
            id: "af317589-9e05-4723-a14a-addbf4f39739",
            forumId: "f094cabf-44b9-4559-ae9d-f809c54f295a",
            author: "Author F",
            title: "Thread 3"
        }
    ],
    posts: [{
            id: "79058380-0e21-4ad3-be48-b236260bd6a5",
            threadId: "3c93f07a-ec5b-44ab-8ffa-57d8d402d491",
            author: "Author G",
            title: "Post 1",
            content: "Content of post 1"
        },
        {
            id: "72d3c05c-c013-456c-936f-b8e046485b86",
            threadId: "3c93f07a-ec5b-44ab-8ffa-57d8d402d491",
            author: "Author J",
            title: "Post 2",
            content: "Content of post 2"
        },
        {
            id: "45b8ddf0-5ef6-46fa-b613-d48aff8b2fc1",
            threadId: "f65c35ce-8b87-4384-bef1-dd99d0ab26c1",
            author: "Author H",
            title: "Post 3",
            content: "Content of post 3"
        },
        {
            id: "415945ec-9608-4a50-8abe-7816d17e989b",
            threadId: "af317589-9e05-4723-a14a-addbf4f39739",
            author: "Author K",
            title: "Post 4",
            content: "Content of post 4"
        }
    ]

}