import React from 'react'
var secret = require("../../private.js")
var axios = require('axios');
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'


const UploadVideo = React.createClass({
  _saveUpload(e) {
    e.preventDefault();

    let userLS = localStorage.getItem('user');
    //parses the info brought down (object)
    let parseUser = JSON.parse(userLS);
    // console.log("This is parseUser inside UploadVideo: ", parseUser);

    let userName = parseUser.userName;
    // console.log("This is userName inside UploadVideo: ", userName);

    axios.get('/users/all', {params: {userName: userName}}) 
    .then(function(res) {
      console.log("THis is the motherfoyer res", res);
    })

    


    
    // let filename  = this.video.value.replace("C:\\fakepath\\", "");

    
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