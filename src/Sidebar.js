import React from 'react';
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';



function Sidebar() {

  const [{ playlists }] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src='https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo-12.jpg' alt='spotifylogo'/>
    
    <SidebarOptions Icon={HomeIcon}title='Home'/>
    <SidebarOptions Icon={SearchIcon}title='Search'/>
    <SidebarOptions Icon={LibraryMusicIcon}title='Your Library'/>
    
    <br />
    <strong className='sidebar_title'>PLAYLISTS</strong>
    <hr />


    {playlists?.items?.map(playlist => (
      <SidebarOptions title={playlist.name} />
    ))}
    
    
    </div>
  )
}

export default Sidebar