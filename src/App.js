import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi

function App() {

  const [token, setToken] = useState(null);



  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      });
    }

    console.log(`I HAVE TOKEN NOW`, token);
  }, [token]);


  return (

    <div className="App">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
