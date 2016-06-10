import React, {Component} from 'react'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import {Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap'
import { hashHistory } from 'react-router'
import ViewingPage from '../ViewingComponent/viewing'

var secret = require("../../../private.js")
var axios = require('axios');


//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class LandingPageVideoPlayer extends React.Component {

  constructor (props) {
    
    super (props)  
    localStorage.setItem('viewerMovie', JSON.stringify({}));
    this.state = {
        movieSent: null
    }
    this.onClickHandler = this.onClickHandler.bind(this);
   }


   __routeToViewing(e){
    e.preventDefault();
   }
   onMouseOverHandler() {
     document.getElementById("play_img").style.visibility = "visible";
   }
    onMouseLeaveHandler() {
     document.getElementById("play_img").style.visibility = "hidden";
   }
   
   onClickHandler (e, movieProps) {
    e.preventDefault();
    localStorage.setItem('viewerMovie', JSON.stringify(movieProps));
    // console.log('movieProps inside onClickHandler inside LandingPageVideoPlayer:', movieProps)
    this.setState({ movieSent: movieProps}, function() {
        hashHistory.push('viewer')
        
    })
   }
  
   
   renderImage(movieProps) {
    if (movieProps.rating > 15) {
      return (
          <CarouselItem  onMouseEnter={this.onMouseOverHandler}>
            <img id="play_img" src="../../../style/assets/play-btn.png" onMouseLeave={this.onMouseLeaveHandler} onClick={e => this.onClickHandler(e, movieProps)} />
            <img id="carousel-img" onClick={e => this.onClickHandler(e, movieProps)} src={movieProps.image}/>
              <Carousel.Caption id="carousel-caption">
                  <h2 id='title-caption'>{movieProps.title}</h2>
                  <h4 id='synopsis-caption'>{movieProps.synopsis}</h4>
              </Carousel.Caption>
          </CarouselItem>
      )
    }
   }

  render() {
    
    if (this.props.allMovies === null) {
        return (
            <div>Loading...</div>
        );
    }

    return (
    <section className="carousel-div">
      <Carousel >
        {this.props.allMovies.map( movie => this.renderImage(movie.m.properties))}
      </Carousel>
      <section style={{display: "none"}}>
      <ViewingPage movieSent={this.state.movieSent} />
      </section>
    </section>
    )
  }
}

export default LandingPageVideoPlayer

