import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import subCategory from "../src/Containers/SubCategory/SubCategory";
import Home from "../src/Containers/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/category" component={subCategory}></Route>
        <Route path="/home" component={Home}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
