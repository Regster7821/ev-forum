import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import { Router } from '@reach/router';
import LandingPage from '../src/views/LandingPage';
import ForumLists from '../src/views/ForumLists';
import Login from '../src/views/Login';
import CreatePost from '../src/views/CreatePost';
import ForumPage from '../src/views/ForumPage';

function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
 
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <Router>
        <LandingPage path='/home' default/>
        <ForumLists path='/posts'/>
        <Login path='/login'/>
        <CreatePost path='/createpost' />
        {/* <ForumPage path='/post/:id'/> */}
      </Router>
    </div>
  );
}

export default App;
