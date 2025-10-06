import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./carouselItems.css";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItemsProps } from "../../types";

const CarouselItems: React.FC<CarouselItemsProps> = (props) => {
  const handleSelect = (selectedIndex: number, e: any) => {
    props.setActiveIndex(selectedIndex);
  };

  let carouselItems: React.ReactElement[] = [];

  carouselItems =
    props.dataItems?.map?.((img, index) => {
      let url = `${props.dataPath}${img}`;
      let name = img.split(".").slice(0, -1).join(".");
      return (
        <Carousel.Item key={index} id={index.toString()}>
          <img className="carousel__img" src={url} alt={index.toString()} />
          <Carousel.Caption>
            <p>{name}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }) || [];

  return carouselItems.length > 0 ? (
    <Carousel
      interval={null}
      touch={true}
      activeIndex={props.activeIndex}
      onSelect={handleSelect}
      prevIcon={<GrFormPrevious />}
      nextIcon={<GrFormNext />}
    >
      {carouselItems}
    </Carousel>
  ) : null;
};

export default CarouselItems;
