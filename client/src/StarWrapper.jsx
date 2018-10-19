import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class StarWrapper extends Component {
//   state = {
//     starNumber: null,
//     numberOfStars: 5
//   };

//   countStars = number => {
//     this.setState({ starNumber: number });
//   };

  render() {
    return (

         <FontAwesomeIcon className={this.props.selectedStar >= this.props.number ? 'selected' : ''} icon={faStar} onClick={() => this.props.countStars(this.props.number)} />
        //  <FontAwesomeIcon className={this.props.selectedStar >= this.props.number ? 'selected' : ''} icon={faStar} onClick={this.props.handleSelect} />

    );
  }
}

export default StarWrapper;
// onClick = { e => this.countStars(e) }
