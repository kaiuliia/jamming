import React from "react";
import { Track } from "./Track.js";
import './trackList.css'


export class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  
 

  render() {
    return (
      <div className="TrackList">
        {
          /* {
      <Track name='' album='' song=''/> */
          this.props.tracks.map(track => {
            return (
              <Track
                track={track}
                name={track.name}
                album={track.album}
                song={track.song}
                key={track.id}
                onAdd={this.props.addTrack}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
              />
            );
          })
        }
      </div>
    );
  }
}
