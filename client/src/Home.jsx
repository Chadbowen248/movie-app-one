import React from 'react';
import Movie from './Movie'


const Homepage = (props) => (
    <div>
        {Object.entries(props.movies).map(item => <Movie details={item[1]} key={item[1].id}/>  )}
    </div>

  );
  
export default Homepage;