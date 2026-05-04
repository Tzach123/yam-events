import React, { useEffect, useRef } from "react";
import classes from "./photosFromEvents.module.css";
import classNames from "classnames";

import img1 from "../../image/photosFromEvents/1.jpeg";
import img3 from "../../image/photosFromEvents/3.jpg";
import img9 from "../../image/photosFromEvents/9.jpeg";
import img10 from "../../image/photosFromEvents/10.jpeg";
import img11 from "../../image/photosFromEvents/11.jpeg";
import img12 from "../../image/photosFromEvents/12.jpeg";

interface PhotosFromEventsProps {
  ifPlayAnimationPhotosFromEvent: boolean;
}

const PhotosFromEvents: React.FC<PhotosFromEventsProps> = ({
  ifPlayAnimationPhotosFromEvent,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(`.${classes.item}`);

    if (ifPlayAnimationPhotosFromEvent || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add(classes.visible));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ifPlayAnimationPhotosFromEvent]);

  return (
    <section className={classes.photosSection} ref={sectionRef}>
      <div className={classes.gallery}>

        <div className={classNames(classes.item, classes.itemImg, classes.itemImg8)}>
          <img src={img10} alt="אירוע 8" loading="lazy" />
        </div>

        <div className={classNames(classes.item, classes.itemImg, classes.itemImg6)}>
          <img src={img11} alt="אירוע 6" loading="lazy" />
        </div>

        <div className={classNames(classes.item, classes.itemText, classes.itemText1)}>
          <h2>האירוע שלכם הציוד שלנו...</h2>
          <h3>גם אתם עומדים לקראת אירוע? ים אירועים זאת הבחירה שלך</h3>
          <h5>מעניק ללקוחותיו את כל הציוד הנדרש לאירוע המושלם...</h5>
        </div>

        <div className={classNames(classes.item, classes.itemImg, classes.itemImg1)}>
          <img src={img1} alt="אירוע 1" loading="lazy" />
        </div>

        <div className={classNames(classes.item, classes.itemImg, classes.itemImg3)}>
          <img src={img3} alt="אירוע 3" loading="lazy" />
        </div>

        <div className={classNames(classes.item, classes.itemText, classes.itemText2)}>
          <h2>הפקת אירוע</h2>
          <h5>
            היא משימה שנראית כמעט בלתי אפשרית במבט ראשון, ואכן למרביתנו אין את
            הידע, ההיכרות והיכולות הנדרשות על מנת להפיק אירוע בצורה מקצועית.
            יחד נבחר את הקונספט ואת השילוב המושלם, נפיק את האירוע בצורה הטובה
            ביותר.
          </h5>
        </div>

        <div className={classNames(classes.item, classes.itemImg, classes.itemImg5)}>
          <img src={img9} alt="אירוע 5" loading="lazy" />
        </div>

        <div className={classNames(classes.item, classes.itemImg, classes.itemImg9)}>
          <img src={img12} alt="אירוע 9" loading="lazy" />
        </div>

      </div>
    </section>
  );
};

export default PhotosFromEvents;
