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
        <h3>Account Information</h3>
        <Gravatar email={this.props.userInfo.email.toLowerCase().trim()} default="monsterid" size={200} rating="pg"></Gravatar>
        <h4>Username: {this.props.userInfo.userName}</h4>
        <h4>First Name: {this.props.userInfo.firstName}</h4>
        <h4>Last Name: {this.props.userInfo.lastName}</h4>
        <h4>Email: {this.props.userInfo.email}</h4>
        <h4>Company Name:{this.props.userInfo.companyName}</h4>
        <h4>Website: {this.props.userInfo.website}</h4>
      </aside>
    )
  }
}

export default ProfileInfo