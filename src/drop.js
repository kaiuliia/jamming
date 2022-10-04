import React from "react";
import "./drop.css";
import {ChildDrop} from './childDrop.js'

export class Drop extends React.Component {
  constructor(props) {
    super(props);
  this.state = {name:'Julia'};
  this.changeName = this.changeName.bind(this);}

  changeName (newName) {
this.setState({
    name: newName
  });
  }

  
  render() {
   return <ChildDrop name={this.state.name} onChange={this.changeName} />
  }

}