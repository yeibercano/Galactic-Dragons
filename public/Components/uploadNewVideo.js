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
    // console.log('userLS PROFILE COMPO
      // console.log('parseUser', parseUser)
    let filename  = this.video.value.replace("C:\\fakepath\\", "");
    console.log('This is filename:', filename);
    let movieInfo = {
      title : this.title.value,
      director : this.director.value,
      actors :  this.actors.value,
      category : this.category.value,
      synopsis:  this.synopsis.value,
      year : this.year.value,
      userName : parseUser.userName,
      video: secret.endpointLocation + '/' + secret.bucketName + '/' + filename
    // image : this.image.value
    }
    console.log('this is movie information:', movieInfo);
// ==================================================================
// Neo4J DB needs to update for the below post
    axios.post('/movies/movie', movieInfo)
    .then(function(response){
      console.log('this is response after registering:', response);
      //userInfo is the response back with the very last user entered
      let movieInfo = response.config.data;
      //sets "user" in localstorage to what is contained in userInfo
      console.log('this is movieInfo:', movieInfo);
      // localStorage.setItem('user', movieInfo)
    })
    .then(function(){
      //redirects to the profile page
      hashHistory.push('profile')
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
    .then(function(){
    console.log('File uploaded successfully')
    })  
    .then(function(){
      //redirects to the profile page
      hashHistory.push('profile')
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
              type="file" name="file"
              ref={input=> this.video = input} />
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