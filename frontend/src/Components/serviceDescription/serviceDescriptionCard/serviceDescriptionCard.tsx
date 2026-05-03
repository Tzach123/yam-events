import React, { ReactNode } from "react";

import classes from "./serviceDescriptionCard.module.css";

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
      <div className={classes.serviceDescriptionCard}>
        <div className={classes.iconWrap}>{props.icon}</div>
        <h5>{props.title}</h5>
        <label>{props.description}</label>
      </div>
    </div>
  );
};

export default ServiceDescriptionCard;
