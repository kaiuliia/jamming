


import React from "react";
import { Track } from "../Track/Track";
import { TrackList } from "../Tracklist/TrackList";
import React, { useState } from "react";
import "./SearchResults.css";

export function SearchResults (props) {


  
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={props.searResults}
          addTrack={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={true}
        />
      </div>
    );
  
}
 
// props: searchResult