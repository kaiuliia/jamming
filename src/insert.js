import React from "react";
import { Greet } from "./index.js";

class Insert extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Julia" };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return <Greet name={this.state.name} onChange={this.changeName} />;
  }
}

ReactDOM.render(<Insert />, document.getElementById("root"));
