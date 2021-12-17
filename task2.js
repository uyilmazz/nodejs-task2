
const posts = [
    { author: 'author1', content: 'content1' },
    { author: 'author5', content: 'content4' },
    { author: 'author2', content: 'content2' },
    { author: 'author3', content: 'content3' },
];

const postSort = () => {
    posts.sort((a, b) => (a.author > b.author) ? 1 : -1);
};

const addPost = (post) => {
    posts.push(post);
}

const showPosts = () => {
    posts.map(post => console.log(post));
}

const allFunction = async () => {
    try {
        console.log('Post List First Version');
        await showPosts();
        await postSort();
        console.log('Post List Sorted Version');

        await showPosts();
        await addPost({ author: 'author4', content: 'content4' });
        console.log('Post List Added Version');
        await showPosts();
        await postSort();
        console.log('Post List Added after Sorted Version');
        await showPosts();
    } catch (err) {
        console.log(err);
    }

}

allFunction();