var React = require('react');
var axios = require('axios');
var secret = require("../../private.js")
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'



var UploadNewVideo = React.createClass({

  _handleChange: function(e) {
    // this.setState({value: e.target.value});
  },

    _saveAndContinue(e) {
    //to handle our submit form
    e.preventDefault();
    let userLS = localStorage.getItem('user');
    //parses the info brought down (object)
    let parseUser = JSON.parse(userLS);
    let videoFile  = this.video.value.replace("C:\\fakepath\\", "");
    let imageFile  = this.image.value.replace("C:\\fakepath\\", "");
    
    let movieInfo = {
      title : this.title.value,
      director : this.director.value,
      actors :  this.actors.value,
      category : this.category.value,
      synopsis:  this.synopsis.value,
      year : this.year.value,
      userName : parseUser.userName,
      video: secret.endpointLocation + '/' + secret.bucketName + '/' + videoFile,
      image : secret.endpointLocation + '/' + secret.bucketName + '/' + imageFile
    }
    
    localStorage.setItem('movieInfo', JSON.stringify(movieInfo))
// ==================================================================
// Neo4J DB needs to update for the below post
    axios.post('/movies/movie', movieInfo)
    .then(function(response){
      
      //userInfo is the response back with the very last user entered
      let movieInfo = response.config.data;
      //sets "user" in localstorage to what is contained in userInfo
      
      // localStorage.setItem('user', movieInfo)
    })
  
/*======================================================================*/
     // to handle our submit form
    //the variable form below is used to grab the entire form element
    var form = document.querySelector("form");
    // console.log('this is form:', form);
    //the variable fdata will be the actual form that will have the new file uploaded
    var fdata = new FormData(form);
    // console.log('this is fdata:', fdata);
    // send fdata to our server to upload file to s3
    axios.post('/movies/movieS3', fdata)
    .then(function(res){
      console.log('res', res.status)
      if(res.status === 200) {
       hashHistory.push('profile')

      }
    console.log('File uploaded successfully')
    })  
},

 

  render: function() {
    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Upload New Movies</h1>
          <p>Example of form validation built with React.</p>
          <form onSubmit={this._saveAndContinue}>
            <input
              type="text"
              ref={input=> this.title = input} 
              require={true}
              name="title"
              placeholder ="Enter Title"
             />
            <input
              type="text" 
              name="director"
              placeholder ="Enter Director"
              ref={input=> this.director = input}
              />
            <input
              type="text"
              name="actors" 
              placeholder ="Enter actors"
              ref={input=> this.actors = input}
              />
            <input
              type="text" 
              name="category" 
              placeholder ="Enter Category"
              ref={input=> this.category = input}
              />
            <textarea
              type="textarea" 
              name="synopsis"
              placeholder ="Enter Brief Synopsis"
              ref={textarea=> this.synopsis = textarea} 
              />
            <input
              type="month" 
              name="year"
              placeholder ="Enter Year"
              ref={input=> this.year = input} 
              />
            <input 
              type="file" 
              name="file"
              ref={input=> this.video = input} />
            <input 
              type="file" 
              name="image"
              ref={input=> this.image = input} />  
            <input 
              type="submit" 
              name="submit"
              value="Upload Video"
              className="register-button" />
          </form>
        </div>

      </div>
    );
  }
    
});
    
module.exports = UploadNewVideo;