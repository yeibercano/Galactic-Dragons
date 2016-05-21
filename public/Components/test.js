import React, { Component } from 'react'
var axios = require('axios');

  class Test extends Component {

    //to handle our submit form
    _handleSubmit(e) {
    e.preventDefault();

    //the variable form below is used to grab the entire form element
    var form = document.querySelector("form");
    console.log('this is form:', form);
    //the variable fdata will be the actual form that will have the new file uploaded
    var fdata = new FormData(form);
    console.log('this is fdata:', fdata);
    //send fdata to our server to upload file to s3
    axios.post('/api/testupload', fdata)
    .then(function(response){
    console.log('File uploaded successfully')
  });  

/*
==========================================================================================
BELOW METHOD USES THE XML VANILLA JS METHOD TO POST TO SERVER SIDE
==========================================================================================
*/
    // //below function to send our form to our server
    // //the parameter 'data' below will be passed the 'fdata'
    // var ajaxFileUpload = function(data) {
    // console.log('this is data inside ajaxFileUpload:', data);
    // console.log('ajaxFileUpload Called!');
    // var xhr = new XMLHttpRequest();
    // //Will send the POST request to the route provided 
    // xhr.open('POST', '/api/testupload', true);
    // //upon file upload success on server side, the xhr.onload function below will be called
    // xhr.onload = function () {
    // console.log('the xhr.onload has been called');
    // console.log(this.responseText);
    // }
    // //below is the line of code that will actually send the fdata to the server
    // xhr.send(data);
    // }

    // //below code to send our updated form to our ajaxFileUpload function
    // //the variable form below is used to grab the entire form element
    // var form = document.querySelector("form");
    // console.log('this is form:', form);
    // //the variable fdata will be the actual form that will have the new file uploaded
    // var fdata = new FormData(form);
    // console.log('this is fdata:', fdata);
    // //we will now call the ajaxFileUpload function with fdata passed in as argument -- this function will be called above
    // ajaxFileUpload(fdata);

/*
==========================================================================================
==========================================================================================
*/

}

    render() {
      return (

          <div>
            <form onSubmit={this._handleSubmit}> 
              <input
              type="file" name="file" />
              <input type="submit" value="Upload Video" name="submit"/>
            </form>
          </div>
   
      )
    }
  }

export default Test