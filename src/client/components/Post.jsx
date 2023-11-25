import React, { useState, useEffect } from 'react';

const Post = (props) => {
    const { content, time, username, likes, messageType } = props.data;
    return(
    <div>
      <h1 className='post'>This is our post content: {content} </h1>
      <h1 className='post'>This is our post time: {time} </h1>
    </div>
    )
  };

export default Post;