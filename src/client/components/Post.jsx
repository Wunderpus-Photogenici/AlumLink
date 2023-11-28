import React, { useState, useEffect } from 'react';
import LikePost from './LikePost.jsx'

const Post = (props) => {
    const { title, content, time, username, likes, messageType, _id } = props.data;
    return(
      <div className='post'>
      <div className='timestamp'>{time}</div>
      <h2 className='title'>{title} </h2>
        <h5 className='postUsername'>Username: {username} </h5>
        <div>
        <h3 className='postContent'>{content} </h3>
        </div>
        <LikePost likes={likes} id={_id}/>
      </div>
    )  
  };

export default Post;

//span role="img" aria-label="Thumbs Up">👍</span> 