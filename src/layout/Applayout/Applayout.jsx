import React from "react";
import { Outlet } from "react-router-dom";
import Fotter from "../Fotter/Fotter";
import Header from "../Header/Header";

const Applayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Fotter/>
        
        
      </div>
    </>
  );
};

export default Applayout;
