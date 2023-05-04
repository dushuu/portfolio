import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="Header">
        <h2>Dushal's portfolio</h2>
      </div>
      <div className="navbar">
        <div>
          <h1 className="pathHeading">
          {window.location.pathname.toLocaleUpperCase().slice(1)}
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Header;
