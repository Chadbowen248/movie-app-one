import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import firebase from "./firebase"
import Navigation from "./Navigation"
import Search from "./Search"
import Home from "./Home"

import "./App.css"

class App extends Component {
  // constructor here to include the React component 'class' 
  // and super is to not override defualts but to just include
  // custom methods/logic
  constructor(props) {
    super(props)
    this.state = {
      movies: null
    }
    // the connection to firebase database
    this.dataRef = firebase.database()
  }

  // on value, watches and updates db on change
  componentDidMount() {
    this.dataRef.ref().on("value", snapshot => {
      this.setState({
        movies: snapshot.val()
      })
    })
  }

  addMovie = movie => this.dataRef.ref('/movies').push(movie)

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" render={() => <Home movies={this.state.movies} />} />
          <Route exact path="/search" render={() => <Search addMovie={this.addMovie} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
