import React from "react";
import img1 from "../../image/aboutGallery/1.jpg";
import img2 from "../../image/aboutGallery/2.jpg";
import img3 from "../../image/aboutGallery/3.jpg";
import classes from "./About.module.css";
import { getYearsActive } from "../../utils/yearsActive";

interface AboutProps {
  ifPlayAnimationAbout: boolean;
}

const SERVICES = [
  "כלי אוכל",
  "ריהוט לאירועים",
  "שולחנות",
  "כסאות",
  "ציוד אלטרנטיבי",
  "פינות ישיבה",
  "שמשיות ואוהלים",
  "מפות ומפיות",
  "כלים שומרי חום וקור",
];

const About: React.FC<AboutProps> = () => {
  const yearsActive = getYearsActive();
  return (
    <section id="about" className={classes.about__section}>
      <div className={classes.wrapper}>

        <div className={classes.ornament}>
          <div className={classes.ornament__line} />
          <div className={classes.ornament__dot} />
          <div className={classes.ornament__line} />
        </div>

        <h2 className={classes.company__name}>ים אירועים</h2>
        <p className={classes.est}>נוסדה 1997 · השכרת ציוד לאירועים</p>

        <div className={classes.divider} />

        <p className={classes.intro}>
          חברה להשכרת כלים וציוד לאירועים ולשמחות, בעלת וותק של {yearsActive} שנים.
          מאז היווסדה צברה ים אירועים מוניטין רב, כמו גם שורה ארוכה של לקוחות מרוצים.
          אנו מעניקים יחס אישי וצמוד, עזרה וייעוץ לכל אורך תהליך ההזמנה ותכנון האירוע —
          כדי שהאירוע שלכם יהיה מוצלח, מהנה ומיוחד.
        </p>

        <ul className={classes.services}>
          {SERVICES.map((s) => (
            <li key={s} className={classes.pill}>{s}</li>
          ))}
        </ul>

        <div className={classes.gallery__row}>
          <div><img src={img3} alt="" /></div>
          <div><img src={img1} alt="" /></div>
          <div><img src={img2} alt="" /></div>
        </div>

        <div className={classes.contact}>
          <p className={classes.summary}>
            בים אירועים שמים דגש על מתן שירות מקצועי, אמין ואדיב לקהל לקוחותינו.
            <br />
            הנכם מוזמנים לדפדף באתר ולהכיר את מגוון הציוד להשכרה.
          </p>

          <div className={classes.contact__row}>
            <div className={classes.contact__item}>
              <span className={classes.contact__label}>משרד</span>
              <span>08-9154110</span>
            </div>
            <div className={classes.contact__item}>
              <span className={classes.contact__label}>פקס</span>
              <span>08-9154115</span>
            </div>
            <div className={classes.contact__item}>
              <span className={classes.contact__label}>נייד</span>
              <span>052-3757040</span>
            </div>
          </div>

          <button className={classes.cta}>נשמח לעמוד לשירותכם</button>
        </div>

      </div>
    </section>
  );
};

export default About;
