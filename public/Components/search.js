import React, {Component} from 'react';
import { hashHistory } from 'react-router';
var axios = require('axios');


class Search extends React.Component{

  constructor(props){
    super (props);
    let searchResults = localStorage.getItem('searchResults');
    searchResults = JSON.parse(searchResults);
    // console.log('this is searchResults:', searchResults)
    this.state = {
      sResults: searchResults 
    }
  }

  componentWillUpdate() {
    let searchResults = localStorage.getItem('searchResults');
    searchResults = JSON.parse(searchResults);
    this.setState({sResults: searchResults})
    return true;
  }

  movieSelected(movieSelected) {
    console.log('This movie was selected:', movieSelected);
    localStorage.setItem('viewerMovie', JSON.stringify(movieSelected));
    hashHistory.push('viewer')  
  }

  displayResult(result) {
    console.log('displayResult is called with result:', result);
    return (
        <div onClick={(movieSelected) => this.movieSelected(result)} >
          <h1>title here</h1>
           <section className="search-item-container" ></section>
           <section className="search-item-container" ></section>
           <img src={result.image} />
           <h3>{result.title}</h3>
        </div>
      )
  }


  render () {

    console.log('this is this.state.sResults inside render:', this.state.sResults.length);
    if (this.state.sResults.length === 0) {
      console.log('this sResults statement executed')
      return <section>Search results not found!</section>
    }

    return (
        <section className="searchResults">
          <h1>This is Where The Search Results Will Be Populated</h1>
            {this.state.sResults.map(result=> this.displayResult(result.m.properties))}
        </section>
      )
  }
}

export default Search

    // if (!this.props.sResults) {
    //   return <div>Loading...</div>
    // }

    //       <section className="search-item-container" ></section>
    //       <img src={result.image} />
    //       <h3>{result.title}</h3>

    // {this.props.sResults.map(result=> this.displayResult(result))}
// onClick={()=> this.props.selectedMovie(videoInfo)}

          // <section className="search-item-container" onClick={()=> this.props.selectedMovie(videoInfo)}></section>
          // <img src={videoInfo.image} />
          // <h3>{videoInfo.title}</h3>

          //      {this.state.searchResults.map(result=> this.displayResult(result))}