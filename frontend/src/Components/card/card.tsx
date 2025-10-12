import React from "react";
import classes from "./card.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { CardProps } from "../../types";

const Card: React.FC<CardProps> = ({ img, showModal, name }) => {
  return (
    <Auxiliary>
      <div className={classes.item} onClick={showModal}>
        <div className={classes.card__img_container}>
          <div
            className={classes.card__img}
            onClick={showModal}
            style={{
              backgroundImage: `url("${img}")`,
            }}
          ></div>
        </div>
        <div className={classes.item__text}>
          <p>{name}</p>
          <div className={classes.hr}></div>
        </div>
      </div>
    </Auxiliary>
  );
};

export default Card;
