var React = require('react');
var axios = require('axios');



var CreateAccountScreen = React.createClass({
  getInitialState: function () {
    return {
      firstName: null,
      lastName: null,
      userName: null,
      password: null,
      confirmPassword: null,
      email: null,
      website: null,
      companyName: null,
      phoneNumber: null,
      video: null,
      image: null
    }
  },

  _handleChange: function(e) {
    // this.setState({value: e.target.value});
  },

    _saveAndContinue(e) {
    //to handle our submit form
    e.preventDefault();
    console.log("form has been submitted, this is e", e.target.value)
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
    video : this.video.value,
    image : this.image.value
    }

    axios.post('/users/register', uInfo)
    .then(function(response){
    console.log()
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
              type="text" 
              name="password" 
              placeholder ="Enter Password"
              ref={input=> this.password = input}
              />
            <input
              type="text" 
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
              type="file" 
              name="video" 
              value = {this.state.value}
              ref={input=> this.video = input}/>
            <input
              type="file" 
              name="image" 
              ref={input=> this.image = input}/>
            <input 
              type="submit" 
              className="register-button" name='submit'/>
        
          </form>
        </div>

      </div>
    );
  }
    
});
    
module.exports = CreateAccountScreen;