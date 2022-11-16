import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Shop from "../components/Shop/Shop";

const Main = () => {
  return (
    <div>
      <Header />
      <Shop />
      <Outlet />
    </div>
  );
};

export default Main;
