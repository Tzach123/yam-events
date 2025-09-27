import React from "react";

import generalDesign from "../css/generalDesign.module.css";
import classes from "./welcome.module.css";
import classNames from "classnames";

const welcome = (props) => {
  return (
    <div className={classes.container_text}>
      <div
        className={classNames({
          [classes.text]: true,
          [generalDesign.center_horizontal]: false,
        })}
      >
        <h1>ים אירועים</h1>
        <h3>השכרת ציוד לכל סוגי האירועים</h3>
        <h5>נפגש בשמחות</h5>
        <div className={classes.arrow}>&#8675;</div>
      </div>
    </div>
  );
};

export default welcome;
