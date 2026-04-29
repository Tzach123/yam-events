import classes from "./serviceDescription.module.css";
import ServiceDescriptionCard from "./serviceDescriptionCard/serviceDescriptionCard";
import {  ServiceDescriptionCard as ServiceDescriptionCardType } from "../../types";
import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";
import { getYearsActive } from "../../utils/yearsActive";

const ServiceDescription= () => {
  const yearsActive = getYearsActive();

  const serviceDescriptionCardsArr: ServiceDescriptionCardType[] = [
    {
      icon: <AiOutlineClear />,
      title: "ציוד מתוחזק ונקי",
      description: (
        <article dir="rtl">
          הציוד מתוחזק על הצד הטוב ביותר! <br /> לאחר כל אירוע הציוד עובר ניקוי
          ושיפוץ כדי שתהנו מציוד במצב חדש
        </article>
      ),
    },
    {
      icon: <FaTruckMoving />,
      title: "שינוע",
      description: <article dir="rtl">הובלה לכל חלקי הארץ</article>,
    },
    {
      icon: <FaHandsHelping />,
      title: "שירות אמין",
      description: <article dir="rtl">{yearsActive} שנה של שירות אמין, מסור ואדיב</article>,
    },
    {
      icon: <GrServices />,
      title: "שירות למגוון האוכלוסייה",
      description: (
        <ul dir="rtl">
          <li>אוכלוסיה מהמגזר הפרטי</li>
          <li>קייטרינגים</li>
          <li>מפיקים</li>
        </ul>
      ),
    },
  ];
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
