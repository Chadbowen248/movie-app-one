import React, { Component } from 'react';


class SearchResult extends Component {


  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

//   handleChange = event => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   handleSearch = () => {
//     const searchTerm = this.state.searchTerm;
//     fetch(`/search/${searchTerm}`)
//     .then(res => res.json())
//     .then(res => this.setState({searchResults: res}))
//   }

  render() {

    // const test = this.state.searchResults.map(comic => {
    //   <searchResult title={}/>
    // })
    return (
      <div className="App">
      <h1>{this.props.title}</h1>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleSearch}>click me</button> */}
      </div>
    );
  }
}

export default SearchResult;