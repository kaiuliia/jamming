import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

const green = "#39D1B4";
const yellow = "#FFD712";

export class Toggle extends React.Component {
    constructor(props) {
    super(props); 

this.state={color:green};
this.changeColor = this.changeColor.bind(this);
}

changeColor() {
    const newColor = this.state.color==green?yellow:green;
    this.setState({color:newColor});
}


  render() {
    return (
      <div className="App" style={{ background: this.state.color }}>
        <h1>Change my color</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}