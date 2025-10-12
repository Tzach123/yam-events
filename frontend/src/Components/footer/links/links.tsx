import React from "react";
import classes from "./links.module.css";

const Links: React.FC = () => (
  <div className={classes.links_container}>
    <div>
      <ul>
        <li>
          <label>כלי הגשה</label>
        </li>
        <li>
          <a href="category?Id=3&subId=5">צלחות</a>
        </li>
        <li>
          <a href="category?Id=3&subId=3">כוסות</a>
        </li>
        <li>
          <a href="category?Id=3&subId=4">סכום</a>
        </li>
        <li>
          <a href="category?Id=3&subId=1">קערות בר</a>
        </li>
        <li>
          <a href="category?Id=3&subId=8">קערות הגשה</a>
        </li>
        <li>
          <a href="category?Id=3&subId=7">סלטרום</a>
        </li>
        <li>
          <a href="category?Id=3&subId=9">שפינגום</a>
        </li>
        <li>
          <a href="category?Id=3&subId=6">סירום</a>
        </li>
        <li>
          <a href="category?Id=3&subId=2">כלים נלווים</a>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li>
          <label>ציוד אלטרנטיבי</label>
        </li>
        <li>
          <a href="category?Id=1&subId=4">פוטונים</a>
        </li>
        <li>
          <a href="category?Id=1&subId=5">כריות</a>
        </li>
        <li>
          <a href="category?Id=1&subId=3">מחצלות</a>
        </li>
        <li>
          <a href="category?Id=1&subId=2">הדומים</a>
        </li>
        <li>
          <a href="category?Id=1&subId=1">פופים</a>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li>
          <label>ציוד נלווה</label>
        </li>
        <li>
          <a href="category?Id=4&subId=5">אוהלים</a>
        </li>
        <li>
          <a href="category?Id=4&subId=1">מיזוג</a>
        </li>
        <li>
          <a href="category?Id=4&subId=2">פרגודים</a>
        </li>
        <li>
          <a href="category?Id=4&subId=6">מפות</a>
        </li>
        <li>
          <a href="category?Id=4&subId=4">מפיות</a>
        </li>
        <li>
          <a href="category?Id=4&subId=3">כלי חימום וקירור</a>
        </li>
        <li>
          <a href="category?Id=4&subId=7">שמשיות</a>
        </li>
      </ul>
    </div>

    <div>
      <ul aria-label="ריהוט">
        <li>
          <label>ריהוט</label>
        </li>
        <li>
          <a href="category?Id=2&subId=3">שולחנות</a>
        </li>
        <li>
          <a href="category?Id=2&subId=2">כסאות</a>
        </li>
        <li>
          <a href="category?Id=2&subId=1">מזנונים</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Links;
