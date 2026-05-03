import React from 'react';
import classes from './loader.module.css';

const Loader: React.FC = () => (
  <div className={classes.wrapper}>
    <div className={classes.spinner} />
  </div>
);

export default Loader;
