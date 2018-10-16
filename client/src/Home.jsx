import React from "react"
import Movie from "./Movie"

const Homepage = props => (
  <div>
    <pre className="App-data">{JSON.stringify(props.movies, null, 2)}</pre>

    {/* {Object.entries(props.movies).map(item => (
      <Movie details={item[1]} key={item[1].id} />
    ))} */}
  </div>
)

export default Homepage
