import React, { Component } from 'react'
var axios = require('axios');

  class Login extends Component {


    _userLogin(e){
      e.preventDefault();
      console.log("You made it into _userLogin");

      let userLogin = {
        userN: this.userName.value,
        pass: this.password.value
      }


    axios.get('/users/login' )
    .then(function(response){
    console.log(response);
    });  
    }

    render () {
      return(
          <div>
            <form onSubmit={this._userLogin} >

              <input
                type="text"
                name="userName"
                ref={input=> this.userName = input} 
                placeholder ="Enter Username"
              />
              <input
                type="text" 
                name="password"
                placeholder ="Enter Password"
                ref={input=> this.password = input}
              />
              <input 
              type="submit" 
              name="submit"
              value="Enter"
              className="login-button" />

            </form>
          </div>
        )
    }
}; 

export default Login