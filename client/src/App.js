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

    const test = this.state.searchResults.map(comic => {
      <SearchResult title={comic.title}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleSearch}>click me</button>
        {test}
      </div>
    );
  }
}

export default App;