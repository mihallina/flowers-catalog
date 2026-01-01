import React from "react";
import "./Header.css";
import basket from "../images/basket.png";
import phone from '../images/phone.png'

export const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <p className="logo">flowers</p>
        <input className="search-inp" type="text" placeholder="Искать" />
        <div className="header-imgs">
          <img className="phone-img" src={phone} alt="" />
          <img className="basket-img" src={basket} alt="" />
        </div>
      </div>
    </div>
  );
};