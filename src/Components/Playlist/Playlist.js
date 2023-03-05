import React, {useState} from "react";
import { Track } from '../Track/Track';
import { TrackList } from "../Tracklist/TrackList";
import './playlist.css'

export function Playlist(props) {
const [playListName, setPlayListName] = useState("My Playlist");

const changePlaylistName = () => {
let currentName = playListName;
currentName = document.getElementById("userInput").value;
setPlayListName(currentName)
};
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
        <button className="Playlist-save"  onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}



