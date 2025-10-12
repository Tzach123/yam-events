import React, { useEffect, useMemo, useRef } from "react";
import "./carouselItems.css";
import { CarouselItemsProps } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselItems: React.FC<CarouselItemsProps> = ({
  setActiveIndex,
  activeIndex,
  dataItems,
  dataPath,
}) => {
  const swiperRef = useRef<any>(null);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const carouselItems = useMemo(
    () =>
      dataItems?.map?.((img, index) => {
        const url = `${dataPath}${img}`;
        const name = img.split(".").slice(0, -1).join(".");
        return (
          <SwiperSlide key={index}>
            <img className="carousel__img" src={url} alt={index.toString()} />
            <span>{name}</span>
          </SwiperSlide>
        );
      }) || [],
    [dataItems, dataPath]
  );

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return carouselItems.length > 0 ? (
    <Swiper
      style={{ height: "100%" }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={(e) => {
        handleSelect(e.activeIndex);
      }}
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
