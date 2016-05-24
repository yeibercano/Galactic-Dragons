var React = require('react');
var axios = require('axios');
var secret = require("../../private.js")
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'



var CreateAccountScreen = React.createClass({
  // getInitialState: function () {
  //   return {
  //     firstName: null,
  //     lastName: null,
  //     userName: null,
  //     password: null,
  //     confirmPassword: null,
  //     email: null,
  //     website: null,
  //     companyName: null,
  //     phoneNumber: null,
  //     video: null,
  //     image: null
  //   }
  // },

  _handleChange: function(e) {
    // this.setState({value: e.target.value});
  },

    _saveAndContinue(e) {
    //to handle our submit form
    e.preventDefault();
    console.log("form has been submitted, this is e", e.target.value)
    let filename  = this.video.value.replace("C:\\fakepath\\", "");
    console.log('This is filename:', filename);
    let uInfo = {
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      userName :  this.userName.value,
      password : this.password.value,
      confirmPassword :  this.confirmPassword.value,
      email : this.email.value,
      website : this.website.value,
      companyName : this.companyName.value,
      phoneNumber : this.phoneNumber.value,
      video : secret.endpointLocation + '/' + secret.bucketName + '/' + filename,
    // image : this.image.value
    }
    console.log('uInfo', uInfo)
// ==================================================================

     //to handle our submit form

    // //the variable form below is used to grab the entire form element
    // var form = document.querySelector("form");
    // console.log('this is form:', form);
    // //the variable fdata will be the actual form that will have the new file uploaded
    // var fdata = new FormData(form);
    // console.log('this is fdata:', fdata);
    // //send fdata to our server to upload file to s3
    // // axios.post('/api/testupload', fdata)
    // // .then(function(response){
    // // console.log('File uploaded successfully')
    // // });  

    axios.post('/users/register', uInfo)
    .then(function(response){
      // this.props.
    // console.log('this is response',response.data[0].user.properties)
    let userInfo = response.data[0].user.properties;
    localStorage.setItem('user',JSON.stringify(userInfo))
   
    })
    .then(function(){
      hashHistory.push('profile')
    })  
},

 

  render: function() {
    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          <p>Example of form validation built with React.</p>
          <form onSubmit={this._saveAndContinue}>
            <input
              type="text"
              ref={input=> this.firstName = input} 
              require={true}
              name="firstName"
              placeholder ="Enter First Name"
             />
            <input
              type="text" 
              name="lastName"
              placeholder ="Enter Last Name"
              ref={input=> this.lastName = input}
              />
            <input
              type="text"
              name="userName" 
              placeholder ="Enter desired username"
              ref={input=> this.userName = input}
              />
            <input
              type="password" 
              name="password" 
              placeholder ="Enter Password"
              ref={input=> this.password = input}
              />
            <input
              type="password" 
              name="confirmPassword"
              placeholder ="Re-enter Password"
              ref={input=> this.confirmPassword = input} 
              />
            <input
              type="text"
              name="email" 
              placeholder ="Enter E-mail"
              ref={input=> this.email = input}
              />
            <input
              type="text" 
              name="website"
              placeholder ="Enter Your Personal Website"
              ref={input=> this.website = input} 
              />
            <input
              type="text" 
              name="companyName"
              placeholder ="Enter The Name Of Your Company"
              ref={input=> this.companyName = input}  
              />
            <input
              type="text" 
              name="phoneNumber"
              placeholder ="Enter Your Phone Number"
              ref={input=> this.phoneNumber = input} 
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
    
module.exports = CreateAccountScreen;