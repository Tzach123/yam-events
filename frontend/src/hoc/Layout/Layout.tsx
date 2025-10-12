import React, { useState, useEffect } from "react";
import Axuiliary from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Footer from "../../Components/footer/footer";
import Toolbar from "../../Components/navigation/toolbar/toolbar";
import SideDrawer from "../../Components/navigation/sideDrawer/sideDrawer";
import { LayoutProps, LayoutState } from "../../types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [state, setState] = useState<LayoutState>({
    showSideDrawer: false,
    ToolbarTop: true,
  });

  useEffect(() => {
    let scrollY = window.scrollY;

    const handleScroll = () => {
      if (scrollY < window.innerHeight / 100) {
        scrollY = window.scrollY - (window.innerHeight / 100) * 12;
        setState((prevState) => ({ ...prevState, ToolbarTop: true }));
      } else {
        scrollY = window.scrollY;
        setState((prevState) => ({ ...prevState, ToolbarTop: false }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sideDrawerClosedHandler = () => {
    setState({ ...state, showSideDrawer: false });
  };

  const sideDrawerToggleHandler = () => {
    setState((prevState) => ({
      ...prevState,
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  return (
    <Axuiliary>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isTop={state.ToolbarTop}
      />
      <SideDrawer
        open={state.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <div className={classes.relative}>
        <main>{children}</main>
      </div>
      <Footer />
    </Axuiliary>
  );
};

export default Layout;
