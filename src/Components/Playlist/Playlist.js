import React, { useState } from "react";
import { TrackList } from "../Tracklist/TrackList";
import "./playlist.css";

export function Playlist(props) {
  const [playListName, setPlayListName] = useState("My Playlist");

  const changePlaylistName = () => {
    let currentName = playListName;
    currentName = document.getElementById("userInput").value;
    setPlayListName(currentName);
  };
}

return (
  <div className="Playlist">
    <input
      id="userInput"
      defaultValue="New Playlist"
      onChange={changePlaylistName}
    />

    <TrackList
      tracks={props.playlist}
      onRemove={props.onRemove}
      isRemoval={false}
    />
    <button className="Playlist-save" onClick={props.onSave}>
      SAVE TO SPOTIFY
    </button>
  </div>
);
