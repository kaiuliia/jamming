import React from "react";

export class Button extends React.Component {
myFunc() {
  alert('AAA')
}


  render() {
    return (
      <button id="button" onClick={this.props.onClick}>
       {this.props.name}
      </button>
    );
  }
}
