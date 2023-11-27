import React, { useState, useEffect } from 'react';
import Post from './Post.jsx'



const InterviewContainer = () => {
    //state
    const [data, setData] = useState({});
    const [posts, setPosts] = useState(<div></div>)
    
    useEffect(() => {
      dataFetcher();
     }, [])
    
    //functionality for async, happens once on startup because dependecies array (second param of UseEffect) is empty
    // need useEffect for async
    
        const dataFetcher = async () => {
          try {
            // let body = JSON.stringify({messageType: "interview"})
            const response = await fetch('/post/interview');
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
      )
    }

  export default InterviewContainer;