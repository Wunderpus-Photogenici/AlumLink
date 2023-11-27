import React, { useState, useEffect } from 'react';

const Post = (props) => {
    const { title, content, time, username, likes, messageType } = props.data;
    return(
    <div className='post'>
    <div className='timestamp'>{time}</div>
    <h2 className='postTitle'>Title: {title} </h2>
      <h6 className='postUsername'>Username: {username} </h6>
      <div>
      <h5 className='postContent'>This is our post content: {content} </h5>
      </div>
      <h5 className='time'>This is our timestamp {time} </h5>
      <h5 className='likes'>This is our like count: {likes} </h5>
      <button className='likeButton'>
      <span role="img" aria-label="Thumbs Up">👍</span> 52
    </button>
    </div>
      
    )  
  };

export default Post;