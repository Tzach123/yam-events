import React from 'react'

import classes from './toolbar.module.css'
import NavigationItems from '../navigationItems/navigationitems'
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle'
import LogoImg from '../../../image/logo/logo.png'

interface ToolbarProps {
  drawerToggleClicked: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ drawerToggleClicked }) => (
  <header className={classes.toolbarTop}>
    <DrawerToggle clicked={drawerToggleClicked} />
    <nav className={classes.desktop__only}>
      <NavigationItems />
    </nav>
    <div className={classes.logo}>
      <a href='/'>
        <img src={LogoImg} alt="Yam Events Logo" />
      </a>
    </div>
  </header>
)

export default Toolbar
