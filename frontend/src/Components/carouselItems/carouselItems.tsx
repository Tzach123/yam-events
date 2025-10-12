import React, { useEffect, useMemo, useRef } from "react";
import "./carouselItems.css";
import { CarouselItemsProps } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselItems: React.FC<CarouselItemsProps> = (props) => {
  const swiperRef = useRef<any>(null);

  const handleSelect = (selectedIndex: number) => {
    props.setActiveIndex(selectedIndex);
  };

  const carouselItems = useMemo(
    () =>
      props.dataItems?.map?.((img, index) => {
        const url = `${props.dataPath}${img}`;
        const name = img.split(".").slice(0, -1).join(".");
        return (
          <SwiperSlide key={index} id={index.toString()}>
            <img className="carousel__img" src={url} alt={index.toString()} />
            <span>{name}</span>
          </SwiperSlide>
        );
      }) || [],
    [props.dataItems, props.dataPath]
  );

  useEffect(() => {
    if (swiperRef.current && props.activeIndex !== null) {
      swiperRef.current.slideTo(props.activeIndex);
    }
  }, [props.activeIndex]);

  return carouselItems.length > 0 ? (
    <Swiper
      style={{ height: "100%" }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={(e) => handleSelect(e.activeIndex)}
      pagination={{
        clickable: true,
      }}
      navigation
      loop
    >
      {carouselItems}
    </Swiper>
  ) : null;
};

export default CarouselItems;
