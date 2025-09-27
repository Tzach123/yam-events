import React from 'react';

import classes from './drawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.drawer__toggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;