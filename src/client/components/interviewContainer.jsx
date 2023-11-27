import React, { useState, useEffect } from 'react';
import Post from './Post.jsx'



const InterviewContainer = () => {
    //state
    const [data, setData] = useState({});

    useEffect(() => {
      dataFetcher();
     }, [])
    
    //functionality for async, happens once on startup because dependecies array (second param of UseEffect) is empty
    // need useEffect for async
    
        const dataFetcher = async () => {
            try {
            const response = await fetch('/interview');
            const data = await response.json();
            setData(data)
          } catch(err) {
            console.log('Fetch not working- ERROR' + err)
          }
        }
    
    // const { content } = data;
      return(
        <div>
          <Post
              data={data}
          />
        </div>
      );
    }

  export default InterviewContainer;