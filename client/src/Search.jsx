import React, { Component } from 'react';
import SearchResult from './SearchResult'

import './App.css';

class Search extends Component {
  state = {
    searchResults: [],
    searchTerm: ''
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const searchTerm = this.state.searchTerm;
    fetch(`/search/${searchTerm}`)
    .then(res => res.json())
    .then(res => this.setState({searchResults: res}))
  }

  render() {

    const movies = this.state.searchResults.map((movie, index) => (
      <div>
      <SearchResult details={{...movie}} key={index} addMovie={this.props.addMovie}/>
      {/* <button onClick={() => this.props.addMovie(this.props.details)}>add</button> */}
</div>
    ));

    return (
  
     
      <div>   
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleSearch}>click me</button>
       <div className="wrapper">
        {movies}
       </div>
      </div>
    );
  }
}

export default Search;