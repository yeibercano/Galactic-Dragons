import React, { Component } from 'react'
import 'isomorphic-fetch'


  class Test extends Component {

    constructor (props) {
    super(props);
    // this.state = [];
    this.state = { file: 'puppies' };
    this._handleSubmit = this._handleSubmit.bind(this)
    this.addFile = this.addFile.bind(this)
    }

///////////////////////////////////////////////////////////////////////
  addFile(e){
    console.log("This is e inside add file:", e)
    this.setState({file: e.target.value})
  }
    _handleSubmit(e) {
    e.preventDefault();

    var ajaxFileUpload = function(data) {
    console.log('ajaxFileUpload Called!');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/testupload', true);
    // xhr.setRequestHeader('Content-type', 'multipart/form-data;boundary=thisisarandomboundary');
    xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
    };
  xhr.send(data);
  }

    console.log('handleSubmit event handler triggered');
    console.log('this is this.state.file', this.state.file);
    let newFile = this.state.file;
    console.log('this is newFile:', newFile);
    var form = document.querySelector("form");
    var fdata = new FormData(newFile);
    console.log('this is fdata:', fdata);
    // Optional. Append custom data.
    // fdata.append('user_city', 'Los Angeles');

    ajaxFileUpload(fdata);

    // Prevents the standard submit event
    // return false;


    console.log('this is form:', form);
//////////////////////////////////////////////////////////////////////////


}

////////////////////////////////////////////////////////////////////////

    render() {
      return (

         <div>
            <form> 
              <input
              type="file" name="file"
              onChange={event=>this.addFile(event)}/>
              <input type="submit" value="Upload Video" name="submit" onClick={this._handleSubmit}/>
            </form>
        </div>
   
      )
    }
  }

export default Test