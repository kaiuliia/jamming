import React from "react";
import "./searchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search=this.search.bind(this)
  }

search() {
  this.props.onSearch(this.state.term);
}

handleTermChange(event) {
  
}

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}
