import React from "react";

import classes from "./serviceDescription.module.css";
import ServiceDescriptionCard from "./serviceDescriptionCard/serviceDescriptionCard";
import { ServiceDescriptionCard as ServiceDescriptionCardData } from "../../types";

interface ServiceDescriptionProps {
  serviceDescriptionCardsArr: ServiceDescriptionCardData[];
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  serviceDescriptionCardsArr,
}) => {
  return (
    <div className={classes.serviceDescription_container}>
      <div className={classes.a}>
        <ServiceDescriptionCard
          title={serviceDescriptionCardsArr[0].title}
          icon={serviceDescriptionCardsArr[0].icon}
          description={serviceDescriptionCardsArr[0].description}
          index={1}
        />
        <ServiceDescriptionCard
          title={serviceDescriptionCardsArr[1].title}
          icon={serviceDescriptionCardsArr[1].icon}
          description={serviceDescriptionCardsArr[1].description}
          index={2}
        />
      </div>
      <div className={classes.a}>
        <ServiceDescriptionCard
          title={serviceDescriptionCardsArr[2].title}
          icon={serviceDescriptionCardsArr[2].icon}
          description={serviceDescriptionCardsArr[2].description}
          index={3}
        />
        <ServiceDescriptionCard
          title={serviceDescriptionCardsArr[3].title}
          icon={serviceDescriptionCardsArr[3].icon}
          description={serviceDescriptionCardsArr[3].description}
          index={4}
        />
      </div>
    </div>
  );
};

export default ServiceDescription;
