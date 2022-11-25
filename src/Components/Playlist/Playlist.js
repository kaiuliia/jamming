import React from "react";
import { Track } from '../Track/Track';
import { TrackList } from "../Tracklist/TrackList";
import './playlist.css'

export class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playListName: "My Playlist",
    };

    this.changePlaylistName = this.changePlaylistName.bind(this);
  }

  changePlaylistName() {
    let currentName = this.state.playListName;
    currentName = document.getElementById("userInput").value;

    this.setState({
      playListName: currentName,
    });
  }

  render() {
    return (
      <div className="Playlist">
       <input
          id="userInput"
          defaultValue='New Playlist'
          onChange={this.changePlaylistName}
        />
       
        <TrackList
          tracks={this.props.playlist}
          onRemove={this.props.onRemove}
          isRemoval={false}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}



