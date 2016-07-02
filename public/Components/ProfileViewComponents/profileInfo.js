import React, {Component} from 'react'
import Gravatar from 'react-gravatar'
var axios = require('axios');
 
// shows ProfileInfo
class ProfileInfo extends Component {
  
  constructor(props){
    super(props)
    
  }

  render() {
    return (
      <aside  className="account_information">
        <h1 id="account_information_title" >Welcome, {this.props.userInfo.userName}!</h1>
        <section id="account_information_gravatar_container">
        <Gravatar id="account_information_gravatar" email={this.props.userInfo.email.toLowerCase().trim()} default="monsterid" size={200} rating="pg"></Gravatar>
        </section>
        <h4 id="full_name">{this.props.userInfo.firstName} {this.props.userInfo.lastName}</h4>
        <h4>{this.props.userInfo.email}</h4>
        <h4>{this.props.userInfo.companyName}</h4>
        <h4>{this.props.userInfo.website}</h4>
      </aside>
    )
  }
}

export default ProfileInfo
        // <img id="account_information_bullet" src="../style/assets/bulletpoint.png"/>