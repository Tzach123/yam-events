import React from "react";
import classes from "./smallCarouselCard.module.css";

interface SmallCarouselCardProps {
  img: string;
  title: string;
}

const SmallCarouselCard: React.FC<SmallCarouselCardProps> = ({
  img,
  title,
}) => (
  <div className={classes.card}>
    <div className={classes.header}>
      <div
        className={classes.background_img}
        style={{ backgroundImage: `url("${img}")` }}
      ></div>
    </div>
    <div className={classes.footer}>
      <p>{title}</p>
    </div>
  </div>
);

export default SmallCarouselCard;
