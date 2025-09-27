import React, { Component } from 'react'
import Axuiliary from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Footer from '../../Components/footer/footer'
import Toolbar from '../../Components/navigation/toolbar/toolbar'
import SideDrawer from '../../Components/navigation/sideDrawer/sideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false,
    ToolbarTop: true,
  }

  componentDidMount() {
    let scrollY = window.scrollY
    window.addEventListener('scroll', () => {
      if (scrollY < window.innerHeight / 100) {
        scrollY = window.scrollY - (window.innerHeight / 100) * 12
        this.setState({ ToolbarTop: true })
      } else {
        scrollY = window.scrollY
        this.setState({ ToolbarTop: false })
      }
    })
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Axuiliary>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          isTop={this.state.ToolbarTop}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div className={classes.relative}>
          <main>{this.props.children}</main>
        </div>
        <Footer />
      </Axuiliary>
    )
  }
}

export default Layout
