import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Axuiliary from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Footer from "../../Components/footer/footer";
import Toolbar from "../../Components/navigation/toolbar/toolbar";
import SideDrawer from "../../Components/navigation/sideDrawer/sideDrawer";
import { LayoutProps, LayoutState } from "../../types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const forceScrolled = location.pathname.startsWith("/category");
  const sentinelRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<LayoutState>({
    showSideDrawer: false,
    ToolbarTop: true,
  });

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    // rootMargin positive-top = extends the observation zone upward.
    // The sentinel (at top:0) stays "intersecting" until the user scrolls
    // past this value — increase it for a later transition.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState((prev) => ({ ...prev, ToolbarTop: entry.isIntersecting }));
      },
      { threshold: 0, rootMargin: "300px 0px 0px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
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
      {/* Sentinel: 1px div at the top — IntersectionObserver watches it
          to decide whether the toolbar should render in "top" mode */}
      <div ref={sentinelRef} aria-hidden style={{ position: "absolute", top: 0, height: "1px", width: "1px", pointerEvents: "none" }} />
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isTop={forceScrolled ? false : state.ToolbarTop}
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
