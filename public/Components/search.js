import React, {Component} from 'react'
var axios = require('axios');


class Search extends React.Component{

  constructor(props){
    super (props);

  }

  displayResult(result) {
    return (
        <section>
          <h1>title here</h1>
           <section className="search-item-container" ></section>

        </section>
      )
  }


  render () {

    // console.log('this is the props inside search render:', this.props);

    return (
        <section>
          <h1>This is Where The Search Results Will Be Populated</h1>

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