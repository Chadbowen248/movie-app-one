import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { auth, googleAuthProvider } from './firebase';
import firebase from "./firebase"
import LogIn from "./LogIn"
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
      movies: null,
      currentUser: null
    }
    // the connection to firebase database
    this.dataRef = firebase.database()
  }

  componentDidMount() {
    // take care of component flash if already logged in through google. 
    const isLoggedIn = window.localStorage.getItem('isLoggedIn') ? true : false;
    this.setState({currentUser: isLoggedIn})
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.setState({ currentUser })
      }
    })
    // on value, watches and updates db on change
    this.dataRef.ref().on("value", snapshot => {
      this.setState({
        movies: snapshot.val()
      })
    })
  }

  signOut = () => {
    // perform signout with Oauth, when that's done
    // set state to null and clear out logged in flag in LS
    auth.signOut().then(() => {
      this.setState({currentUser: null});
      window.localStorage.removeItem('isLoggedIn');
    });
  }

  signIn = () => {
    auth.signInWithPopup(googleAuthProvider).then((result) => {
      this.setState({currentUser: result.user})
      window.localStorage.setItem('isLoggedIn', true);
    })
  }

  addMovie = movie => this.dataRef.ref('/movies').push(movie)

  render() {
    return (
      <BrowserRouter>
        <div>
          {
            !this.state.currentUser ? <LogIn signIn={this.signIn}/> :
            <div>
              <Navigation signOut={this.signOut} userInfo={this.state.currentUser}/>
              <Route exact path="/" render={() => <Home movies={this.state.movies} />} />
              <Route exact path="/search" render={() => <Search addMovie={this.addMovie} />} />
            </div>

          }
        </div>
      </BrowserRouter>
    )
  }
}

export default App
