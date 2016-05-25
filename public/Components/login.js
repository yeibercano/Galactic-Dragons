import React, { Component } from 'react'
var axios = require('axios');

var Login = React.createClass({


    _userLogin(e){
      e.preventDefault();
      console.log("You made it into _userLogin");

      let userLogin = {
        userName: this.userName.value,
        password: this.password.value
      }

    console.log('userLogin',userLogin)
    axios.post('/users/login',userLogin )
      .then(function(response){
        console.log('response from server',response);
      });  
    },

    render: function () {
      return(
          <div>
            <form onSubmit={this._userLogin} >

              <input
                type="text"
                name="userName"
                ref={input=> this.userName = input} 
                placeholder ="Enter Username"/>
              <input
                type="text" 
                name="password"
                placeholder ="Enter Password"
                ref={input=> this.password = input}/>
              <input 
              type="submit" 
              name="submit"
              value="Enter"
              className="login-button" />

            </form>
          </div>
        )
    }
}); 

export default Login