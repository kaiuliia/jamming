import { render } from "@testing-library/react";
import React, {useState} from "react";
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Track } from "./Components/Track/Track";
import { TrackList } from "./Components/Tracklist/TrackList";
import { Playlist } from './Components/Playlist/Playlist'
import { SearchResults } from "./Components/SearchResults/SearchResults";
import './App.css';

import Spotify from "./Components/util/Spotify";

function App (props) {
const [searchResults, setSearchResults] = useState([]);
const [playlistName, setPlaylistName] = useState("My Playlist");
const [playlistResults, setPlaylistResults] = useState([]);



  const addTrack = (track) => {
    let playlists = playlistResults;
    let search = searchResults;

    if (playlists.find((song) => track.id === song.id)) {
      return;
    } else {
      playlists.unshift(track);
      let i = search.indexOf(track);
      search.splice(i, 1);
    }

      setPlaylistResults(playlists),
      setSearchResults(search)
  }
   
  

  const removeTrack=(track)=> {
    let playlists = playlistResults;
    let search = searchResults;
    let i = playlists.indexOf(track);
    playlists.splice(i, 1);
      setPlaylistResults(playlists)
  
  }

savePlaylist() {
   
  const trackUris = this.state.playlistResults.map(track=>track.uri);
Spotify.savePlaylist(this.state.playlistName, trackUris).then(
  () => {
     this.setState({
      playlistName: 'New Playlist',
      playlistTracks:[]
     })
  }
)
alert('Your playlist was saved')
}

search(term) {
   Spotify.search(term).then(searchResults => {
    this.setState({searchResults: searchResults})
   })
}
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
          <p id='jam'>Create a custom playlist and save it to your Spotify account!</p>
        </h1>

        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlist={this.state.playlistResults}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}



export default App;

