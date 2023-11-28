import React from 'react';
import InterviewContainer from './InterviewContainer.jsx'
import NetworkContainer from './NetworkContainer.jsx'
import JobsContainer from './JobsContainer.jsx'
import AddPost from './AddPost.jsx'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  //Logic to toggle visibility of add post pop-up
  const [seen, setSeen] = useState(false);

  function togglePopup () {
    setSeen(!seen);
  }

  return(
    <div className="appBody">
      <div>
        <h1 className='alumlink'>AlumLink</h1>
      </div>
      <Router>
        <div className='links-container'>
          <Link to="/">Interview Resources</Link>
          <Link to="/post/jobs">Job Opportunity Discussion</Link>
          <Link to="/post/network">Networking</Link>
        </div>
        <hr />
        <div>
          <button onClick={togglePopup} type="submit" className="postButton">Add Post</button>
          {seen ? <AddPost toggle={togglePopup} /> : null}
        </div>
        <Routes>
          <Route path="/" element={<InterviewContainer />}>
          </Route>
          <Route path="/post/jobs" element={<JobsContainer />}>
          </Route>
          <Route path="/post/network" element={<NetworkContainer />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
};

export default App;
