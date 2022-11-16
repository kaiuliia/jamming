import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// export class NavBar extends React.Component {
//   render() {
//     const pages = [
//       "home",
//       "blog",
//       "pics",
//       "bio",
//       "art",
//       "shop",
//       "about",
//       "contact",
//     ];
//     const navLinks = pages.map((page) => {
//       return <a href={"/" + page}>{page}</a>;
//     });

//     return <nav>{navLinks}</nav>;
//   }
// }

// reportWebVitals();

// export class Greet extends React.Component {
//   render() {
//     return <h1>Hi there, {this.props.name}!</h1>;
//   }
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<Greet firstName="Julia" />, document.getElementById("root"));

// export class Greet extends React.Component {
//   render() {
//     return <h1>HELLO,{this.props.name} </h1>;
//   }
// }

// ReactDOM.render(<Greet name='Julia' />, document.getElementById("app"));
