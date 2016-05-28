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
    console.log("This is props inside LandingPageVideoPlayer", props)
    this.state = {
        movieSent: ''
    }

    this.onClickHandler = this.onClickHandler.bind(this);
   }


   __routeToViewing(e){
    e.preventDefault();
    console.log("!!!!!!!!!!!!You made it into __routeToViewing!!!!!!!!!!!!");
   }
   
   onClickHandler (e, movieProps) {
    e.preventDefault();
    console.log('movieProps inside onClickHandler inside LandingPageVideoPlayer:', movieProps)
    this.setState({ movieSent: movieProps})
    var target = e.target.src;
    console.log('this is target:', target);
   
   }

   renderImage(movieProps) {
    return (
        <CarouselItem>
          <video onClick={e => this.onClickHandler(e, movieProps)} src={movieProps.video}/>
        </CarouselItem>
    )
   }

  render() {

    console.log('this is after setting state for movieSent:', this.state.movieSent);
    if (this.props.allMovies === null) {
        return (
            <div>Loading...</div>
        );
    }

    return (

     <div>
      <ViewingPage movieSent={this.state.movieSent} />
      <Carousel>
        {this.props.allMovies.map(movie => this.renderImage(movie.m.properties))}
      </Carousel>
     </div>
    )
  }
}

export default LandingPageVideoPlayer

        // <CarouselItem>
        //   <image src={this.props.allMovies[0].m.properties.image}/>
        // </CarouselItem>



        // <Video controls>
        //     <source src="https://s3-us-west-2.amazonaws.com/galactic.video/Earth.mp4" type="video/mp4" />
        //     <Overlay />
        //     <Controls>
        //         <Play />
        //         <Seek />
        //         <Time />
        //         <Mute />
        //         <Fullscreen />
        //     </Controls>
        // </Video>
        //   <CarouselItem>
        //   <img src="https://s3-us-west-2.amazonaws.com/galactic.video/samplePoster1.jpg" type="image/jpeg"/>
        //   <Carousel.Caption>
        //     <h1>Title</h1>
        //     <h3>This is the description of the movie currently showing in the carousel</h3>
        //   </Carousel.Caption>
        // </CarouselItem>

        // <CarouselItem>
        //   <video src="https://s3-us-west-2.amazonaws.com/galactic.video/smallToy.mp4" type="video/mp4"/>
        //   <Carousel.Caption>
        //     <h1>Title</h1>
        //     <h3>This is the description of the movie currently showing in the carousel</h3>
        //   </Carousel.Caption>
        // </CarouselItem>

        // <CarouselItem>
        //   <video src="https://s3-us-west-2.amazonaws.com/galactic.video/shortE.mp4" type="video/mp4"/>
        //   <Carousel.Caption>
        //     <h1>Title</h1>
        //     <h3>This is the description of the movie currently showing in the carousel</h3>
        //   </Carousel.Caption>
        // </CarouselItem>
