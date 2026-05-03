import React from 'react'

import classes from './toolbar.module.css'
import NavigationItems from '../navigationItems/navigationitems'
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle'
import LogoImg from '../../../image/logo/logo.png'

interface ToolbarProps {
  drawerToggleClicked: () => void;
  isTop: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({ drawerToggleClicked, isTop }) => (
  <header className={`${classes.toolbar} ${isTop ? classes.top : classes.scrolled}`}>
    <div className={classes.logo}>
      <a href='/'>
        <img src={LogoImg} alt="Yam Events Logo" />
      </a>
    </div>
    <div className={classes.spacer} />
    <nav className={classes.desktopOnly}>
      <NavigationItems isTop={isTop} />
    </nav>
    <DrawerToggle clicked={drawerToggleClicked} isTop={isTop} />
  </header>
)

export default Toolbar
