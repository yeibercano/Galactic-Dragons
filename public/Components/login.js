import React, { Component } from 'react'
var axios = require('axios');
import { Router, Redirect, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'


class Login extends React.Component {

  constructor (props) {
    //Signifies what is coming from the super class?
    // console.log("For kicks: ", this.props.userInfo);
    // get request to db to retrieve the movie nodes and subsequent video url contained within
    // let urlServer = '';
    // axios.get("/movies", {params: {userName: this.props.userInfo.userName}})
    // .then(function(movieResponse){
    //   urlServer = movieResponse.data[movieResponse.data.length-1].m.properties.video
      
    //   // TODO: Get video url from movieResponse at very last index if it comes back in an array
    //   // remember to put the component back into profile once finished with TODO. Place array of movies into allMovies property
    // })
    super (props)  
      let userLS = localStorage.getItem('user');
      //parses the info brought down (object)
      let parseUser = JSON.parse(userLS);
      console.log('userLS PROFILE COMPONENT', parseUser);
      // this.props.user = localStorage.getItem(JSON.parse(user))
      // let movieLS = localStorage.getItem('movieInfo');
      //parses the info brought down (object)
      // let parseMovie = JSON.parse(movieLS);
      // console.log('this is the new parsed movie info:', parseMovie)
    this._userLogin = this._userLogin.bind(this);
    this.state = {
     user: parseUser,
      test: ""
    }
   }
    


    _userLogin(e){
      e.preventDefault();
      // console.log("You made it into _userLogin");

      let userLogin = {
        userName: this.userName.value,
        password: this.password.value
      }

    // console.log('userLogin',userLogin)
    axios.post('/users/login',userLogin )
      .then(function(response){

        console.log('response from server',response);
        console.log('response after login:', response.data.status)
        if(response.data.status === 401) {
          alert('wrong password')
        }
      }).then(function() {
          alert('working password')
        
        hashHistory.push('home')

      }).catch(function(err){
        if (err ) throw err
      })
    }


    render () {
      return(
          <div>
            <form onSubmit={this._userLogin} >

              <input
                type="text"
                name="userName"
                ref={input=> this.userName = input} 
                placeholder ="Enter Username"/>
              <input
                type="password" 
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
}

export default Login


