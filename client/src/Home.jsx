// import React from "react"
// import Movie from "./Movie"

// const Homepage = props => (
//   <div>
//     <pre className="App-data">{JSON.stringify(props.movies, null, 2)}</pre>
  
    // {/* {Object.keys(props.movies).map(item => (
    //   <Movie details={item[1]} key={item[1].id} />
    // ))} */}
//   </div>
// )

// export default Homepage
import React, { Component } from 'react';
import Movie from "./Movie"
import SearchResult from './SearchResult'

class Homepage extends Component {
  state = {
    star: ''
  };



  render() {
    const test = this.props.movies;

    // if (test) {
    //   return 'test'
    // }

    // else {
    //   return 'not here'
    // // }
    // sad = () => {
    //   return 'sad';
    // }

    // mad = () => {
    //   return 'mad'
    // }

    return (
  
        <div className='wrapper'>
            {!this.props.movies ? '' : Object.entries(this.props.movies).map(item => (
      <SearchResult details={item[1]} key={item} />
      // console.log(item)
    ))}
   {/* {!this.props.movies ? '' :  Object.entries(this.props.movies).map((item) => {
   <Movie details={item} key={item} />
})} */}
      
      </div>
    );
  }
}

export default Homepage;