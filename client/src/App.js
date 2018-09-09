import React, { Component } from 'react';
import SearchResult from './SearchResult.jsx'

import logo from './logo.svg';

import './App.css';

class App extends Component {
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

    const movies = this.state.searchResults.map((comic, index) => (
      <SearchResult details={{...comic}} key={index}/>
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

export default App;