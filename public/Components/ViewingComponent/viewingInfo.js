import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ViewingInfo extends React.Component {


  render() {   
    return (
      <div> 
        <h1>This is Where The Movie Information resides</h1>       
      </div>
    );
  }
}

export default ViewingInfo

