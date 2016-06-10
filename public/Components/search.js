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
    localStorage.setItem('viewerMovie', JSON.stringify(movieSelected));
    hashHistory.push('viewer')  
  }

  displayResult(result) {
    return (

        <section onClick={(movieSelected) => this.movieSelected(result)} className="searchResults">
          <section className="search-item-title-container" >
            <h3 id="search_title">{result.title}</h3>
          </section>
          <section className="search-item-container" >
            <img id="search_image_result" src={result.image} />
          </section>
        </section>

      )
  }


  render () {

    if (this.state.sResults.length === 0) {
      return <section className="search_not_found">Search results not found!</section>
    }

    return (

        <section>
          <section className="result_header">
            <h1>Results For Your Search: </h1>
          </section>
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