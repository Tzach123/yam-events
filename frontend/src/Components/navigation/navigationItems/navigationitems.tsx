import React from "react";
import classes from "./navigationItems.module.css";
import { NavLink } from "react-router-dom";

const NavigationItems: React.FC = () => (
  <div className={classes.navigation__items}>
    <div className={classes.container}>
      <NavLink to={"/"} activeClassName={classes.active}>
        דף ראשי
      </NavLink>
    </div>
    <div className={classes.container}>
      <a href="/#about">אודות</a>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> כלי הגשה </button>
        <div className={classes.drop__down__content}>
          <a href="category?Id=3&subId=5">צלחות</a>
          <a href="category?Id=3&subId=3">כוסות</a>
          <a href="category?Id=3&subId=4">סכו"ם</a>
          <a href="category?Id=3&subId=1">קערות בר</a>
          <a href="category?Id=3&subId=8">קערות הגשה</a>
          <a href="category?Id=3&subId=7">סלטרים</a>
          <a href="category?Id=3&subId=9">שיפינגים</a>
          <a href="category?Id=3&subId=6">סירים</a>
          <a href="category?Id=3&subId=2">כלים נלווים</a>
        </div>
      </div>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ריהוט </button>
        <div className={classes.drop__down__content}>
          <a href="category?Id=2&subId=3">שולחנות</a>
          <a href="category?Id=2&subId=2">כסאות</a>
          <a href="category?Id=2&subId=1">מזנונים</a>
        </div>
      </div>
    </div>

    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד אלטרנטיבי </button>
        <div className={classes.drop__down__content}>
          <a href="category?Id=1&subId=4">פוטונים</a>
          <a href="category?Id=1&subId=5">כריות</a>
          <a href="category?Id=1&subId=3">מחצלות</a>
          <a href="category?Id=1&subId=2">הדומים</a>
          <a href="category?Id=1&subId=1">פופים</a>
        </div>
      </div>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד נלווה </button>
        <div className={classes.drop__down__content}>
          <a href="category?Id=4&subId=5">אוהלים</a>
          <a href="category?Id=4&subId=1">מיזוג</a>
          <a href="category?Id=4&subId=2">פרגודים</a>
          <a href="category?Id=4&subId=6">מפות</a>
          <a href="category?Id=4&subId=4">מפיות</a>
          <a href="category?Id=4&subId=3">כלי חימום וקירור</a>
          <a href="category?Id=4&subId=7">שמשיות</a>
        </div>
      </div>
    </div>
  </div>
);

export default NavigationItems;
