import { render } from "@testing-library/react";
import React from "react";
import { SearchBar } from "./SearchBar.js";
import { Track } from "./Track.js";
import { TrackList } from "./TrackList";
import { Playlist } from "./Playlist";
import { SearchResults } from "./SearchResults.js";
import './root.css';

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "britney", album: "toxic", song: "overprotected", id: 1 }, //<Track name='britney' album='toxic' song=''/>
        { name: "justin", album: "freedom", song: "free", id: 2 },
        { name: "freddy", album: "bogemian", song: "bicycle", id: 3 },
      ],

      playlistResults: [
        { name: "alla", album: "nepogoda", song: "rozy", id: 4 },
        { name: "filipp", album: "dozhd", song: "ty i ya", id: 5 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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




  render() {
    return (
      <div className="Spotify" style={{ backgroundColor: "purple" }}>
        <h1>Jamming</h1>
        <SearchBar />

        <SearchResults
          searResults={this.state.searchResults}
          onAdd={this.addTrack}
        />
        <Playlist
          playlist={this.state.playlistResults}
          onRemove={this.removeTrack}
        />
      </div>
    );
  }
}
