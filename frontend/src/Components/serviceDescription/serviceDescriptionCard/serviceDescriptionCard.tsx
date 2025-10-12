import React, { ReactNode } from "react";

import classes from "./serviceDescriptionCard.module.css";
import generalDesign from "../../css/generalDesign.module.css";
import classNames from "classnames";

interface ServiceDescriptionCardProps {
  title: string;
  icon: React.ReactNode;
  description: ReactNode;
  index: number;
}

const ServiceDescriptionCard: React.FC<ServiceDescriptionCardProps> = (
  props
) => {
  return (
    <div className={classes.serviceDescriptionCard_container}>
      <div
        className={classNames({
          [classes.serviceDescriptionCard]: true,
          [generalDesign.center_horizontal]: false,
        })}
      >
        <div>{props.icon}</div>
        <h5>{props.title}</h5>
        <label> {props.description}</label>
      </div>
    </div>
  );
};

export default ServiceDescriptionCard;
