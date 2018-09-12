import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './Navigation'
import Search from './Search'
import Home from './Home'

import './App.css';

class App extends Component {
  state = {
    searchResults: [],
    searchTerm: ''
  };

  // handleChange = event => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  // handleSearch = () => {
  //   const searchTerm = this.state.searchTerm;
  //   fetch(`/search/${searchTerm}`)
  //   .then(res => res.json())
  //   .then(res => this.setState({searchResults: res}))
  // }

  render() {
    return (
      <BrowserRouter>
      <div>   
        <Navigation />
        <Route
            exact
            path="/"
            render={() => (
              <Home />
            )}
          />
        <Route
            exact
            path="/search"
            render={() => (
              <Search />
            )}
          />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;