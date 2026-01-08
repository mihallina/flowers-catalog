import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isPhoneInfoOpen, setIsPhoneInfoOpen] = useState(false);
  const phoneInfoRef = useRef(null);
  const phoneIconRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        phoneInfoRef.current &&
        !phoneInfoRef.current.contains(e.target) &&
        phoneIconRef.current &&
        !phoneIconRef.current.contains(e.target)
      ) {
        setIsPhoneInfoOpen(false);
      }
    };

    if (isPhoneInfoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPhoneInfoOpen]);

  return (
    <div className="Header">
      <div className="header-container container">
        <div className="header-links">
          <Link to="/" className="header-link">
            <p className="logo">flowers</p>
          </Link>
          <Link to="/categories" className="header-catalog">
            Каталог
          </Link>
        </div>
        {/* <input className="search-inp" type="text" placeholder="Искать" /> */}
        <div className="header-imgs">
          <div
            ref={phoneIconRef}
            className="phone-icon-wrapper"
            onClick={(e) => {
              e.stopPropagation();
              setIsPhoneInfoOpen(!isPhoneInfoOpen);
            }}
          >
            <img className="phone-img" src='/images/phone.png' alt="" />
          </div>
          {isPhoneInfoOpen && (
            <div className="phone-info" ref={phoneInfoRef}>
              <h2>Помощь</h2>
              <p>123 456-78-90 / Городской</p>
              <p>123 456-78-90 / МТС</p>
              <p>123 456-78-90 / А1</p>
              <h3>Время работы:</h3>
              <p>Ежедневно с 9:00 до 20:00</p>
            </div>
          )}
          <Link to='/cart'>
            <img className="basket-img" src='/images/basket.png' alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
