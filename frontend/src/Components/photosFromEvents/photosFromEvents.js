import React from "react";

import classes from "./photosFromEvents.module.css";
import classNames from "classnames";
import img1 from "../../image/photosFromEvents/1.jpg";
import img3 from "../../image/photosFromEvents/3.jpg";
import img5 from "../../image/photosFromEvents/5.jpg";
import img6 from "../../image/photosFromEvents/6.jpg";
import img8 from "../../image/photosFromEvents/8.jpg";

const photosFromEvents = (props) => {
  return (
    <div className={classes.photosFromEvents_container}>
      <div
        className={classNames({
          [classes.gallery]: true,
          [classes.fadeInRightBigAnimation]:
            props.ifPlayAnimationPhotosFromEvent,
        })}
      >
        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_1]: true,
          })}
        >
          <img src={img1} className={classes.gallery__img} />
        </figure>
        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_6]: true,
          })}
        >
          <img src={img6} className={classes.gallery__img} />
        </figure>

        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_3]: true,
          })}
        >
          <img src={img3} className={classes.gallery__img} />
        </figure>

        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_5]: true,
          })}
        >
          <img src={img5} className={classes.gallery__img} />
        </figure>
        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_8]: true,
          })}
        >
          <img src={img8} className={classes.gallery__img} />
        </figure>

        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_text1]: true,
          })}
        >
          <h2>האירוע שלכם הציוד שלנו...</h2>
          <h3>גם אתם עומדים לקראת אירוע? ים אירועים זאת הבחירה שלך</h3>
          <h5>מעניק ללקוחותיו את כל הציוד הנדרש לאירוע המושלם... </h5>
        </figure>

        <figure
          className={classNames({
            [classes.gallery__item]: true,
            [classes.gallery__item_text2]: true,
          })}
        >
          <h2>הפקת אירוע</h2>
          <h5>
            היא משימה שנראית כמעט בלתי אפשרית במבט ראשון, ואכן למרביתנו אין את
            הידע, ההיכרות והיכולות הנדרשות על מנת להפיק אירוע בצורה מקצועית. יחד
            נבחר את הקונספט ואת השילוב המושלם, נפיק את האירוע בצורה הטובה ביותר.
          </h5>
        </figure>
      </div>
    </div>
  );
};

export default photosFromEvents;
