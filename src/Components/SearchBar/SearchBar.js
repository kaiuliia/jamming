
import "./searchBar.css";
import React, { useState } from "react";


export  function SearchBar  () {

const [term, setTerm] = useState('');

const search = () => {
  this.props.onSearch(term);
}

const handleTermChange = ({event}) => {
setTerm(event.target.value)
}

 
    return (
      <div className="SearchBar">
        <input onChange = {handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button onClick ={search} className="SearchButton">SEARCH</button>
      </div>
    );
  }

