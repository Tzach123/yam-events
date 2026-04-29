import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import classes from "./smallCarousel.module.css";
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

const slides = [
  { img: img1, title: "זכוכית בועות" },
  { img: img2, title: "יוטה אפור" },
  { img: img3, title: "זכוכית מרוקעת" },
  { img: img4, title: "חום" },
  { img: img5, title: "טרפז" },
  { img: img6, title: "מרובע לבן" },
  { img: img7, title: "קאלה" },
  { img: img8, title: "שלודיש" },
];

const SmallCarousel: React.FC<SmallCarouselProps> = () => {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.titleWrapper}>
          <h2 className={classes.title}>הסטים שלנו</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0:    { slidesPerView: 1 },
            480:  { slidesPerView: 2 },
            768:  { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className={classes.swiper}
        >
          {slides.map(({ img, title }) => (
            <SwiperSlide key={title} className={classes.slide}>
              <SmallCarouselCard img={img} title={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SmallCarousel;
