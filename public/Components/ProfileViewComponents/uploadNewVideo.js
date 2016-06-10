var React = require('react');
var axios = require('axios');
var secret = require("../../../private.js")
import Load from 'react-loading';
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'



var UploadNewVideo = React.createClass({

    _saveAndContinue(e) {
    //to handle our submit form
    e.preventDefault();
    document.getElementById("loading_bubbles").style.visibility ="visible";
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
      image : secret.endpointLocation + '/' + secret.bucketName + '/' + imageFile,
      voters: [],
      rating: 0,
      plays: 0,
      clicks: 0,
    }
    localStorage.setItem('movieInfo', JSON.stringify(movieInfo))
// ==================================================================
// Neo4J DB needs to update for the below post
    axios.post('/movies/movie', movieInfo)
    .then(function(response){
      //movieInfo is the response back with the very last user entered
      let movieInfo = response.config.data;
    })
  
/*======================================================================*/
     // to handle our submit form
    //the variable form below is used to grab the entire form element
    var form = document.querySelector("form");
    //the variable fdata will be the actual form that will have the new file uploaded
    var fdata = new FormData(form);
    // send fdata to our server to upload file to s3
    axios.post('/movies/movieS3', fdata)
    .then(function(res){
      if(res.status === 200) {
       return hashHistory.push('profile')
      }
    document.getElementbyId("loading")
    console.log('File uploaded successfully')
    }) 
},
 
  render: function() {
    return (
      <section className="create_account_screen">
        <section className="create_account_form">
          <h1>Upload New Movies</h1>
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
          <section id="loading_bubbles">
            <Load type='spinningBubbles' color='white'  />
          </section>
        </section>
      </section>
    );
  }
    
});
    
module.exports = UploadNewVideo;