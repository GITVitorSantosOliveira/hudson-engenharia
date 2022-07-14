import React from 'react'
import Carousel from 'nuka-carousel'
import SlideText from '../SlideText'
import SlideProfile from '../SlideProfile'

function Slider() {
  return (
    <Carousel
      withoutControls='false' autoplay='true' wrapAround={true}  slidesToShow={1}
        >
          <SlideText/>
          <SlideProfile/>
  </Carousel>
  )
}

export default Slider