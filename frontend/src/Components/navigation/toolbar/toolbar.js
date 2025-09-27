import React from 'react'

import classes from './toolbar.module.css'
import NavigationItems from '../navigationItems/navigationitems'
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle'
import LogoImg from '../../../image/logo/logo.png'

const toolbar = (props) => (
  <header className={classes.toolbarTop}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.desktop__only}>
      <NavigationItems />
    </nav>
    <div className={classes.logo}>
      <a href='/'>
        <img src={LogoImg} />
      </a>
    </div>
  </header>
)

export default toolbar
