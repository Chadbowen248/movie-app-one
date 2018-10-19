import React, { Component } from 'react';
import StarRating from './StarRating';
import firebase from "./firebase"

class Movie extends Component {
  constructor(props){
    super(props)
    this.state = {
      starNumber: '0'
    };
    this.moviesRef = firebase.database().ref('/movies');
    this.test = firebase.database().ref(`/movies/${this.props.id}/ratings/${this.props.currentUser.uid}`);
    
  }

  componentDidMount() {
    this.test.on('value', snapshot => {
      this.setState({starNumber: snapshot.val()})
    })
  }

  countStars = number => {
    this.setState({ starNumber: number }, () => {
      this.handleSelect();
    });
  };

//   this.setState({
//     someState: obj
// }, () => {
//     this.afterSetStateFinished();
// });

  handleSelect = () => {
    this.moviesRef.child(this.props.id)
                  .child('ratings')
                  .child(this.props.currentUser.uid)
                  .set(this.state.starNumber)
  }

render() {
  return(
      <div className="result-wrapper">
      <div className="content-overlay"></div>
        <img src={`https://image.tmdb.org/t/p/original${this.props.details.img}`}
            alt={this.props.details.title}
            className="result-wrapper--image"/>
        <div className="square"></div>
        <div className="stars--container">
          <StarRating countStars={this.countStars} selectedStar={this.state.starNumber} handleSelect={this.handleSelect}/>
        </div>
        <span className="score">{this.state.starNumber}</span>
      </div>

  )
}
}

export default Movie;