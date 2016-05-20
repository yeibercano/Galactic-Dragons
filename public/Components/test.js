import React, { Component } from 'react'

  class Test extends Component {

    //to handle our submit form
    _handleSubmit(e) {
    e.preventDefault();

    //below function to send our form to our server
    var ajaxFileUpload = function(data) {
    console.log('this is data inside ajaxFileUpload:', data);
    console.log('ajaxFileUpload Called!');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/testupload', true);
    xhr.onload = function () {
    console.log(this.responseText);
    }
    xhr.send(data);
    }

    //below code to send our updated form to our ajaxFileUpload function
    var form = document.querySelector("form");
    console.log('this is form:', form);
    var fdata = new FormData(form);
    console.log('this is fdata:', fdata);
    ajaxFileUpload(fdata);

}

    render() {
      return (

          <div>
            <form onSubmit={this._handleSubmit}> 
              <input
              type="file" name="file" />
              <input type="submit" value="Upload Video" name="submit" />
            </form>
          </div>
   
      )
    }
  }

export default Test