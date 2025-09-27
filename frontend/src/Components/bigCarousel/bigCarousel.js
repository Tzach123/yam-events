import React from "react";

import classes from "./bigCarousel.module.css";
import { Carousel } from "react-bootstrap";

const bigCarousel = (props) => {
  return (
    <div
      className={props.isTop == false ? classes.img__div : classes.top_img__div}
    >
      {/* <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    /> 
                    <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    />
                    <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    />
                    <Carousel.Caption />
                </Carousel.Item>
            </Carousel> */}
    </div>
  );
};

export default bigCarousel;
