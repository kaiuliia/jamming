import React from "react";
import './track.css'

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addNewTrack = this.addNewTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.actionButton = this.actionButton.bind(this);
  }

  addNewTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  actionButton() {
    this.props.isRemoval ? this.addNewTrack() : this.removeTrack();
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.album}|{this.props.track.song}
          </p>
        </div>
        <button
          className="Track-action"
          onClick={this.actionButton}
          
        >
          {this.props.isRemoval ? "+" : "-"}
        </button>
      </div>
    );
  }
}
