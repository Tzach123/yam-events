import React from "react";

import classes from "./header.module.css";

interface HeaderProps {
  isTop?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      className={
        props.isTop !== true
          ? classes.container_header
          : classes.container_header_top
      }
    ></div>
  );
};

export default Header;
