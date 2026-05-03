import React from 'react';

import classes from './drawerToggle.module.css';

interface DrawerToggleProps {
  clicked: () => void;
  isTop: boolean;
}

const DrawerToggle: React.FC<DrawerToggleProps> = ({ clicked, isTop }) => (
  <button
    className={`${classes.hamburger} ${isTop ? classes.isTop : ''}`}
    onClick={clicked}
    aria-label="תפריט"
  >
    <span />
    <span />
    <span />
  </button>
);

export default DrawerToggle;
