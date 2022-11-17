import React from "react";
import { Button } from "./Nav.js";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "yes",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  authorize(event) {
    const loginForm = event.target.firstChild.value;

    if (loginForm == this.state.password) {
      this.setState({ authorized: true });

      alert("Thats right!");
    } else {
      alert("it's wronggg");
    }
    const auth = loginForm;
  }

  logOut() {
    this.setState({ authorized: false });
  }

  render() {
    const contactInfo = (
      <div>
        <ul>
          <li>client@example.com</li>
          <li>555.555.5555</li>
        </ul>
        <Button name="back" onClick={this.logOut} />
      </div>
    );

    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input name="login" placeholder="Password" />

        <Button name="submit" />
      </form>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
    // return login
  }

  //   ins () {
  // const element = document.getElementById("input");
  // if (element.value==='yes') {alert('Thats right!')} else {alert('Wrong!')}
  //   }

  //   render() {

  //     return (
  //       <form id="form">
  //         <input id='input'></input>
  //         <Button name="submit"  onClick={this.ins}/>
  //       </form>
  //     );
  //   }
}
