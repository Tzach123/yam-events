import React from "react";
import classes from "./card.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { CardProps } from "../../types";

const Card: React.FC<CardProps> = (props) => {
  return (
    <Auxiliary>
      <div
        className={classes.item}
        onClick={() => {
          props.setActiveIndex(props.id);
        }}
      >
        <div className={classes.card__img_container}>
          <div
            className={classes.card__img}
            onClick={props.showModal}
            style={{
              backgroundImage: `url("${props.img}")`,
            }}
          ></div>
        </div>
        <div className={classes.item__text}>
          <p>{props.name}</p>
          <div className={classes.hr}></div>
        </div>
      </div>
    </Auxiliary>
  );
};

export default Card;
