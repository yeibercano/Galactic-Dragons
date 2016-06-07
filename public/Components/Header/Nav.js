// import React, { Component } from 'react';
var React = require('react');
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

//this component is for the Logo/Brand

var Menu = React.createClass({
    render: function () {
        return (
            <Dropdown>
                <DropdownTrigger>Categories</DropdownTrigger>
                <DropdownContent>
                    <ul>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/favorites">Favorites</a>
                        </li>
                        <li>
                            <a href="/logout">Log Out</a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        )
    }
});

// class Nav extends Component {

//   selectedOption(value) {
//     console.log('this was selected:', value);
//   }
 
//   render() {
//     return (
//       <Dropdown>
//         <DropdownTrigger>Movies</DropdownTrigger>
//         <DropdownContent>
//             <ul>
//                 <li>
//                     <a >Action</a>
//                 </li>
//                 <li>
//                     <a >Comedy</a>
//                 </li>
//                 <li>
//                     <a >Children</a>
//                 </li>
//             </ul>
//         </DropdownContent>
//       </Dropdown>
//     )
//   }

// }

export default Menu

  // selectedOption(value) {
  //   console.log('this was selected:', value);
  // }
 
  // render() {
  //   return (
  //     <div className="dropdown menu"> 
  //       <button className="dropbtn">Categories</button>
  //         <div className="dropdown-content">
  //           <option value="comedy" onSelect={this.selectedOption(value)}>comedy</option>
  //           <option value="action">action</option>
  //           <option value="children">children</option>
  //         </div>
  //     </div>
  //   )
  // }