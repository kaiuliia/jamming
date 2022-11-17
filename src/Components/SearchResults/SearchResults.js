


import React from "react";
import { Track } from "../Track/Track";
import { TrackList } from "../Tracklist/TrackList";
import "./SearchResults.css";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searResults}
          addTrack={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
      </div>
    );
  }
}
 
// props: searchResult