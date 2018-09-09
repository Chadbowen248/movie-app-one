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

    const test = this.state.searchResults.map(comic => (
      <SearchResult title={comic.title}/>
    ));
    return (
      <div>   
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleSearch}>click me</button>
       <h6>
        {test}
        <SearchResult title={this.state.searchTerm}/>
       </h6>
      </div>
    );
  }
}

export default App;