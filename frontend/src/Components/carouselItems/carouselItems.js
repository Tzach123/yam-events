import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "./carouselItems.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselItems = (props) => {
  const handleSelect = (selectedIndex, e) => {
    props.setActiveIndex(selectedIndex);
  };

  let CarouselItems = "";

  CarouselItems = props.dataItems.map((img, index) => {
    let url = `${props.dataPath}${img}`;
    let name = img.split(".").slice(0, -1).join(".");
    return (
      <Carousel.Item key={index} id={index}>
        <img className="carousel__img" src={url} alt={index} />
        <Carousel.Caption>
          <p>{name}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return CarouselItems.length > 0 ? (
    <Carousel
      interval={null}
      touch={true}
      activeIndex={props.activeIndex}
      onSelect={handleSelect}
      prevIcon={<GrFormPrevious />}
      nextIcon={<GrFormNext />}
    >
      {CarouselItems}
    </Carousel>
  ) : null;
};

export default CarouselItems;
