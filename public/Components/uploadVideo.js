import React from 'react'
var secret = require("../../private.js")
var axios = require('axios');
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'


const UploadVideo = React.createClass({
  _saveUpload(e) {
    e.preventDefault();
    console.log("form has been submitted, this is e", e.target.value);
    let filename  = this.video.value.replace("C:\\fakepath\\", "");

    let videoInfo = {
      video : secret.endpointLocation + '/' + secret.bucketName + '/' + filename,
    }
  },


  //    axios.post('/users/register', videoInfo)
  //   .then(function(response){
  //     // this.props.
  //   // console.log('this is response',response.data[0].user.properties)
  //   let userInfo = response.data[0].user.properties;
  //   localStorage.setItem('user',userInfo);
  //   }).then(function(){
  //     hashHistory.push('profile')
  //   })  
  // },
  
  render() {
    return (
      <div>
        <h1>This is Where a User May Upload More Videos</h1>
        <form onSubmit={this._saveUpload}>
           <input
                type="file" name="file"
                ref={input=> this.video = input} />
              <input 
                type="submit" 
                name="submit"
                value="Upload Video"
                className="register-button" />
        </form>
      </div>
    );
}
})

export default UploadVideo