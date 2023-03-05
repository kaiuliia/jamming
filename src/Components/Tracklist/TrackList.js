import React from "react";
import { Track } from "../Track/Track";
import "./trackList.css";

export function TrackList(props) {
  return (
    <div className="TrackList">
      {
        /* {
      <Track name='' album='' song=''/> */
        props.tracks.map((track) => {
          return (
            <Track
              track={track}
              name={track.name}
              album={track.album}
              song={track.song}
              key={track.id}
              onAdd={props.addTrack}
              onRemove={props.onRemove}
              isRemoval={props.isRemoval}
            />
          );
        })
      }
    </div>
  );
}
