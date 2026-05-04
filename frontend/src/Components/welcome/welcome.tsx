import React from "react";

import classes from "./welcome.module.css";


interface WelcomeProps { }

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <span className={classes.eyebrow}>השכרת ציוד לאירועים</span>
        <h1>ים אירועים</h1>
        <h3>כל מה שצריך כדי להפוך כל אירוע לבלתי נשכח</h3>
        <h5>נפגש בשמחות</h5>
        <div className={classes.arrow}>&#8675;</div>
      </div>
    </div>
  );
};

export default Welcome;
