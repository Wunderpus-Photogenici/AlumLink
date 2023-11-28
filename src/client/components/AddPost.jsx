import React, {useState} from 'react';

const AddPost = (props, {onAddPost}) => {
    const [post, setPost] = useState({
        title: '',
        content: '',
        time: '',
        username: '',
        likes: '',
        messageType: 'network',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((lastPost) => ({
            ...lastPost,
            [name]: value,
        }));
    }
    
    const handleSubmit = async (e) => {
        // if event is not being handled, the default action should not be taken
        e.preventDefault();
        //Logic to handle popUp
        
        // onAddPost({post});
        
        try {
            const response = await fetch('/post', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(post)
            });
            const postResponse = await response.json();
            setPost(postResponse)
            console.log('post debug', post);
        } catch(err) {
            console.log('ERROR in AddPost HandleSubmit:', err)
        }
        
        props.toggle()
    }

    return (
        <div className='popup'>
            <div className='popup-inner'>
            <h2 className='addPostTitle'>Add Post</h2>
            <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={post.username} onChange={handleChange} />
            <label>Title:</label>
            <input type="text" name="title" value={post.title} onChange={handleChange} />
            <label>Post Content:</label>
            <input type="text" name="content" value={post.content} onChange={handleChange} />
            <label>Post Type:</label>
            <select className= "selectArrow" type="text" name="messageType" value={post.messageType} onChange={handleChange} > 
                <option value="interview" >Interview Resources</option>
                <option value="jobs" >Job Opportunity Discussion</option>
                <option value="network" >Networking</option>
            </select>    
            <button type="submit">Add Post</button>  
            <hr/>     
                </form>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
};
export default AddPost;