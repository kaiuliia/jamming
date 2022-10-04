import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./index.js";
import { Greet } from "./index.js";
import { Button } from "./Nav.js";
import { Drop } from "./drop.js";
import { Form } from "./form.js";
import { Toggle } from "./toggle.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form />
        <Greet name="Juli" />
        <Button name="secondButton" />
        <Drop />
        <Toggle name="change color!" />
        <h1>ufjfk</h1>
      </header>
    </div>
  );
}

export default App;
