import React, {useState} from 'react';

const AddPost = ({onAddPost}) => {
    const [post, setPost] = useState({
        username: '',
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((lastPost) => ({
            ...lastPost,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        onAddPost(post);

        try {
        const response = await fetch('/addPost', {
        method: 'POST',
        body: JSON.stringify(post)
        });
        const post = await response.json();
        setPost(post)
        } catch(err) {
        console.log('ERROR in AddPost HandleSubmit:', err)
        }
        
    }

return (
    <div>
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={post.username} onChange={handleChange} />
        <label>Title:</label>
        <input type="text" name="title" value={post.title} onChange={handleChange} />
        <label>Post Content:</label>
        <input type="text" name="content" value={post.content} onChange={handleChange} />

        
        <button type="submit">Add Post</button>
    </form>
    </div>
)
};
export default AddPost;