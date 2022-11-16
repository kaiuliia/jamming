import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./index.js";
import { Greet } from "./index.js";
import { Button } from "./Nav.js";
import { Drop } from "./drop.js";
import { Form } from "./form.js";
import { Toggle } from "./toggle.js";
import { SearchBar } from "./SearchBar.js";
import { Track } from "./Track.js";
import { SearchPlaylist } from "./TrackList";
import { MyPlaylist } from "./Playlist";
import { Root } from "./root";

function App() {
  return (
    <div className="App">
      {/* <Toggle>
        <NavBar />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Form />
        <Greet name="Juliroma" />
        <Button name="secondButton" />
        <Drop />
      </Toggle>

      <Toggle>
        <h1>hello</h1>
      </Toggle> */}

      <Root />
    </div>
  );
}

export default App;
