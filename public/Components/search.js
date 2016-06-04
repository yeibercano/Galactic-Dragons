import React, {Component} from 'react'
var axios = require('axios');


class Search extends React.Component{

  constructor(props){
    super (props)

    this.state{
      results: ""
    }
  }

  displayResult(result) {
    return (
        <section>
          <section className="search-item-container" onClick={()=> this.props.selectedMovie(videoInfo)}>
          <img src={videoInfo.image} />
          <h3>{videoInfo.title}</h3>
        </section>
      )
  }

  getResults() {
    axios.get('/search', {params: {}}).then(data => {
        // console.log('data', data)
        this.setState( { results: data } );
      });
  }

  render(){
    return (
        <section>
          <h1>This is Where The Search Results Will Be Populated</h1>
          {this.state.searchResults.map(result=> this.displayResult(result))}
        </section>
      )
  }
}

export default Search
