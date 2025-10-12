import React from "react";
import { Route, Routes } from "react-router-dom";
import SubCategory from "./Containers/SubCategory/SubCategory";
import Home from "./Containers/Home/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/category" element={<SubCategory />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
