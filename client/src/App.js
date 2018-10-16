import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import firebase from "./firebase"
import Navigation from "./Navigation"
import Search from "./Search"
import Home from "./Home"

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null
    }
    this.dataRef = firebase.database().ref()
  }

  componentDidMount() {
    this.dataRef.on("value", snapshot => {
      this.setState({
        movies: snapshot.val()
      })
    })
  }

  addMovie = movie => this.dataRef.push(movie)

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
