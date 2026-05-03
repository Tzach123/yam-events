import React from "react";
import classes from "./navigationItems.module.css";
import { NavLink } from "react-router-dom";

interface NavigationItemsProps {
  isTop?: boolean;
}

const NavigationItems: React.FC<NavigationItemsProps> = ({ isTop = false }) => (
  <div className={`${classes.navLinks} ${isTop ? classes.isTop : ''}`}>
    <div className={classes.item}>
      <NavLink to={"/"} className={({ isActive }) => isActive ? classes.active : ''}>
        דף ראשי
      </NavLink>
    </div>
    <div className={classes.item}>
      <a href="/#about">אודות</a>
    </div>
    <div className={`${classes.item} ${classes.dropdown}`}>
      <button className={classes.dropBtn}>כלי הגשה</button>
      <div className={classes.dropMenu}>
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
    <div className={`${classes.item} ${classes.dropdown}`}>
      <button className={classes.dropBtn}>ריהוט</button>
      <div className={classes.dropMenu}>
        <a href="category?Id=2&subId=3">שולחנות</a>
        <a href="category?Id=2&subId=2">כסאות</a>
        <a href="category?Id=2&subId=1">מזנונים</a>
      </div>
    </div>
    <div className={`${classes.item} ${classes.dropdown}`}>
      <button className={classes.dropBtn}>ציוד אלטרנטיבי</button>
      <div className={classes.dropMenu}>
        <a href="category?Id=1&subId=4">פוטונים</a>
        <a href="category?Id=1&subId=5">כריות</a>
        <a href="category?Id=1&subId=3">מחצלות</a>
        <a href="category?Id=1&subId=2">הדומים</a>
        <a href="category?Id=1&subId=1">פופים</a>
      </div>
    </div>
    <div className={`${classes.item} ${classes.dropdown}`}>
      <button className={classes.dropBtn}>ציוד נלווה</button>
      <div className={classes.dropMenu}>
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
);

export default NavigationItems;
