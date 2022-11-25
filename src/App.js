import { render } from "@testing-library/react";
import React from "react";
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Track } from "./Components/Track/Track";
import { TrackList } from "./Components/Tracklist/TrackList";
import { Playlist } from './Components/Playlist/Playlist'
import { SearchResults } from "./Components/SearchResults/SearchResults";
import './App.css';

import Spotify from "./Components/util/Spotify";

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
playlistName:'My Playlist',
      playlistResults: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
     this.savePlaylist = this.savePlaylist.bind(this);
     this.search = this.search.bind(this);
  }

  addTrack(track) {
    let playlists = this.state.playlistResults;
    let search = this.state.searchResults;

    if (playlists.find((song) => track.id === song.id)) {
      return;
    } else {
      playlists.unshift(track);
      let i = search.indexOf(track);
      search.splice(i, 1);
    }

    this.setState({
      playlistResults: playlists,
      searchResults: search,
    });
  }

  removeTrack(track) {
    let playlists = this.state.playlistResults;
    let search = this.state.searchResults;
    let i = playlists.indexOf(track);
    playlists.splice(i, 1);

    this.setState({
      playlistResults: playlists,
    });
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
        </h1>
         <div className="App">
        <SearchBar onSearch={this.search}/>
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

