import React, {Component} from 'react'
import {Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap'
var secret = require("../../../private.js")
var axios = require('axios');
class ProfileVideoList extends Component {
 
  videoInfo(videoInfo) {
    return (
        <Carousel.Item className="list-item-container" >
          <img id="mini_carousel" src={videoInfo.image} onClick={()=> this.props.selectedMovie(videoInfo)}/>
          <Carousel.Caption>
            <h3>{videoInfo.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
    )
  }
  render() {
    if (this.props.moviesList === '') {
      return <section id="not_upload">You have not Uploaded Any Movies...</section>
    }
    return (
      <section>
        <h1 className="upload_list_title">Your Uploaded Content</h1>
        <Carousel className="profile_video_list">
            {this.props.moviesList.map(movie => this.videoInfo(movie.m.properties))}
        </Carousel>
      </section>
    );
  }
}
export default ProfileVideoList