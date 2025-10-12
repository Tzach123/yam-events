import React from 'react';

import classes from './drawerToggle.module.css';

interface DrawerToggleProps {
  clicked: () => void;
}

const DrawerToggle: React.FC<DrawerToggleProps> = ({ clicked }) => (
    <div className={classes.drawer__toggle} onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;