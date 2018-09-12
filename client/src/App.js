import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import base from "./base";
import Navigation from './Navigation'
import Search from './Search'
import Home from './Home'

import './App.css';

class App extends Component {
  state = {
    movies: []
  };

  componentWillMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "movies"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

// component did mount, call firebase and get the movies

  render() {
    return (
      <BrowserRouter>
      <div>   
        <Navigation />
        <Route
            exact
            path="/"
            render={() => (
              <Home movies={this.state.movies}/>
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