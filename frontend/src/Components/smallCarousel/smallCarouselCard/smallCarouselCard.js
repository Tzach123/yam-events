import React from "react";
import classes from "./smallCarouselCard.module.css";
import classses from "./smallCarouselCard.module.css";

const smallCarouselCard = (props) => (
  <div className={classes.card}>
    <div className={classses.header}>
      <div
        className={classes.background_img}
        style={{ backgroundImage: `url("${props.img}")` }}
      ></div>
    </div>
    <div className={classes.footer}>
      <p>{props.title}</p>
    </div>
  </div>
);

export default smallCarouselCard;
