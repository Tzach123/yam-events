import React from "react";

import classes from "./welcome.module.css";


interface WelcomeProps { }

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className={classes.container_text}>
      <div className={classes.shadow_bg} />
      <div className={classes.text}>
        <h1>ים אירועים</h1>
        <h3>השכרת ציוד לכל סוגי האירועים</h3>
        <h5>נפגש בשמחות</h5>
        <div className={classes.arrow}>&#8675;</div>
      </div>
    </div>
  );
};

export default Welcome;
