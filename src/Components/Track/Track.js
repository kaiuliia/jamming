import React from "react";
import './track.css'

export function Track (props) {


 const addNewTrack = () => {
   props.onAdd(props.track);
  }

  const removeTrack = () =>{
    props.onRemove(props.track);
  }

  const actionButton = () => {
    props.isRemoval ? addNewTrack() : removeTrack();
  }

  
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{props.track.name}</h3>
          <p>
            {props.track.album}|{props.track.song}
          </p>
        </div>
        <button
          className="Track-action"
          onClick={actionButton}
          
        >
          {props.isRemoval ? "+" : "-"}
        </button>
      </div>
    );
  }

