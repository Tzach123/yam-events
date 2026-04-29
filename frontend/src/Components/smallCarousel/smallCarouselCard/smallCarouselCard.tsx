import React from "react";
import classes from "./smallCarouselCard.module.css";

interface SmallCarouselCardProps {
  img: string;
  title: string;
}

const SmallCarouselCard: React.FC<SmallCarouselCardProps> = ({ img, title }) => (
  <div className={classes.card}>
    <div
      className={classes.image}
      style={{ backgroundImage: `url("${img}")` }}
    />
    <div className={classes.gradient} />
    <p className={classes.title}>{title}</p>
  </div>
);

export default SmallCarouselCard;
