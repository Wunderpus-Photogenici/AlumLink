import React from 'react';
import InterviewContainer from './InterviewContainer.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  return(
  <div>
   <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Interview Resources</Link>
          </li>
          <li>
            <Link to="/">Job Listings</Link>
          </li>
          <li>
            <Link to="/">Networking</Link>
          </li>
        </ul>

        <hr />
  <Routes>
  <Route path="/" element={InterviewContainer}>
  </Route>
  <Route path="/" element={InterviewContainer}>
  </Route>
  <Route path="/" element={InterviewContainer}>
  </Route>
</Routes>
</div>
</Router>
<div> <InterviewContainer /></div>
  </div>
  )
};

export default App;
