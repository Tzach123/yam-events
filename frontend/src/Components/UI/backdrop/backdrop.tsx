import React from 'react';
import classes from './backdrop.module.css';

interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show, clicked }) => {
  return show ? <div className={classes.backdrop} onClick={clicked}></div> : null;
};

export default Backdrop;