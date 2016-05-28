import React, { Component } from 'react'
import ViewingInfo from './viewingInfo'
import ViewingPlayer from './viewingPlayer'
var axios = require('axios');



// this is the parent component 
class ViewingPage extends Component {

  constructor (props) {
    super (props) 
    console.log('this is props in viewing.js:', props);
  }

 componentWillMount() {
  console.log('this is props inside component will mount:', this.props);
 }

  render() {
    console.log('this is this.props inside render of viewing.js:', this.props);
    return (
      <div> 
        <h1> Viewing the Movies</h1>
        <ViewingPlayer />
        <ViewingInfo />
      </div>
    )
  }
}

export default ViewingPage
