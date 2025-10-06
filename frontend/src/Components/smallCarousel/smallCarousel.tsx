import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import generalDesign from "../css/generalDesign.module.css";
import classes from "./smallCarousel.module.css";
import classNames from "classnames";
import SmallCarouselCard from "./smallCarouselCard/smallCarouselCard";
import { SmallCarouselProps } from "../../types";
import img1 from "../../image/smallCarousel/1.jpeg";
import img2 from "../../image/smallCarousel/2.jpg";
import img3 from "../../image/smallCarousel/3.jpeg";
import img4 from "../../image/smallCarousel/4.jpeg";
import img5 from "../../image/smallCarousel/5.jpeg";
import img6 from "../../image/smallCarousel/6.jpeg";
import img7 from "../../image/smallCarousel/7.jpeg";
import img8 from "../../image/smallCarousel/8.jpeg";

const SmallCarousel: React.FC<SmallCarouselProps> = ({ visibleSlides }) => {
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
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={visibleSlides}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            navigation={false}
            pagination={false}
            loop={true}
            className={classNames({
              [classes.CarouselProvider]: true,
              [generalDesign.center_horizontal]: false,
            })}
          >
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img1} title="זכוכית בועות" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img2} title="יוטה אפור" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img3} title="זכוכית מרוקעת" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img4} title="חום" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img5} title="טרפז" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img6} title="מרובע לבן" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img7} title="קאלה" />
            </SwiperSlide>
            <SwiperSlide className={classes.Slide}>
              <SmallCarouselCard img={img8} title="שלודיש" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmallCarousel;
