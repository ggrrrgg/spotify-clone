import React, { useEffect } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi

function App() {

  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // console.log(user);

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
      
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZF1E4v8O7854zsqe').then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        }))
    
    }


    console.log(`I HAVE TOKEN NOW`, token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);
  console.log(token);


  return (

    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
