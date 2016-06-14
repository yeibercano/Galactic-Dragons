import React from 'react'
var secret = require("../../../private.js")
var axios = require('axios');
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'


const UploadVideo = React.createClass({
  _saveUpload(e) {
    e.preventDefault();
    hashHistory.push('NewVideo')   
  },
  
  render() {
    return (
      <section className="upload_video_button">
        <form onSubmit={this._saveUpload}>
          <input 
            type="submit" 
            name="submit"
            value="Upload Video"
            className="upload-button" />
        </form>
      </section>
    );
  }
})

export default UploadVideo