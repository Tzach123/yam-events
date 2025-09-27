import React from 'react'

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import generalDesign from '../css/generalDesign.module.css'
import classes from './smallCarousel.module.css'
import classNames from 'classnames'
import SmallCarouselCard from './smallCarouselCard/smallCarouselCard'
import img1 from '../../image/smallCarousel/1.jpeg'
import img2 from '../../image/smallCarousel/2.jpg'
import img3 from '../../image/smallCarousel/3.jpeg'
import img4 from '../../image/smallCarousel/4.jpeg'
import img5 from '../../image/smallCarousel/5.jpeg'
import img6 from '../../image/smallCarousel/6.jpeg'
import img7 from '../../image/smallCarousel/7.jpeg'
import img8 from '../../image/smallCarousel/8.jpeg'

const smallCarousel = (props) => {
  return (
    <div className={classes.small__carousel_container}>
      <div
        className={classNames({
          [classes.small__carousel]: true,
          [generalDesign.center_horizontal]: true,
        })}
      >
        <div className={classes.title}>
          <h1>הסטים שלנו</h1>
        </div>
        <div className={classes.container__carousel}>
          <CarouselProvider
            totalSlides={8}
            visibleSlides={props.visibleSlides}
            interval={3000}
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            isPlaying={true}
            step={1}
            dragEnabled={false}
            className={classNames({
              [classes.CarouselProvider]: true,
              [generalDesign.center_horizontal]: false,
            })}
          >
            <Slider className={classes.Slider}>
              <Slide index={0} className={classes.Slide}>
                <SmallCarouselCard img={img1} title='זכוכית בועות' />
              </Slide>
              <Slide index={1} className={classes.Slide}>
                <SmallCarouselCard img={img2} title='יוטה אפור' />
              </Slide>
              <Slide index={2} className={classes.Slide}>
                <SmallCarouselCard img={img3} title='זכוכית מרוקעת' />
              </Slide>
              <Slide index={3} className={classes.Slide}>
                <SmallCarouselCard img={img4} title='חום' />
              </Slide>
              <Slide index={4} className={classes.Slide}>
                <SmallCarouselCard img={img5} title='טרפז' />
              </Slide>
              <Slide index={5} className={classes.Slide}>
                <SmallCarouselCard img={img6} title='מרובע לבן' />
              </Slide>
              <Slide index={6} className={classes.Slide}>
                <SmallCarouselCard img={img7} title='קאלה' />
              </Slide>
              <Slide index={7} className={classes.Slide}>
                <SmallCarouselCard img={img8} title='שלודיש' />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  )
}

export default smallCarousel
