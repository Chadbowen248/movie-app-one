import React, { Component } from 'react';

class Movie extends Component {
  state = {
    star: ''
  };



  render() {

    return (
  
        <div className="result-wrapper">
        <img src={`https://image.tmdb.org/t/p/original${this.props.details.img}`}
            alt={this.props.details.title}
            className="result-wrapper--image"/>
        <h1 className="result-wrapper--title">{this.props.details.title}</h1>
      </div>
    );
  }
}

export default Movie;