import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './Spotify';

function App() {

  const [token, setToken] = useState(null);



  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log(`I HAVE TOKEN NOW`, token);
  }, [token]);


  return (

    <div className="App">
      {
        token ? (
          <h1>Im Logged in</h1>
        ) : (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
