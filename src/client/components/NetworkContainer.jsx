import React, { useState, useEffect } from 'react';
import Post from './Post.jsx'



const NetworkContainer = () => {
  //state
  const [data, setData] = useState({});
  const [posts, setPosts] = useState(<div></div>)
  
  //functionality for async, happens once on startup because dependecies array (second param of UseEffect) is empty
  // need useEffect for async
  useEffect(() => {
    dataFetcher();
    }, [])
  
  
    const dataFetcher = async () => {
      try {
        const response = await fetch('/post/network');
        const data = await response.json();
        setData(data)
        populator(data);
      } catch(err) {
        console.log('Fetch not working- ERROR' + err)
      }
    }
    
    const populator = (data) => {
      const postsArray = [];
      for (let i = 0; i < data.length; i++){
        let tempPost = <Post data={data[i]} />
        postsArray.push(tempPost);
      };
      setPosts(postsArray)
    };


  return(
    <div>
      {posts}
    
    </div>
  );
}
  export default NetworkContainer;