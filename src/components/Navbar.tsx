import React, { useState } from "react";
import {
  MdExpandMore,
  MdExpandLess,
  MdSearch,
  MdShoppingCart
} from "react-icons/md";
import logo from "../static/img/logo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  function toggle() {
    setIsMobile(!isMobile);
  }

  function toggleSubMenu() {
    setIsShopMenuOpen(!isShopMenuOpen);
  }
  return (
    <>
      <div className="TopHeader">
        <div className="flex-item-center">
          VENTE D'OBJETS DE DÉCORATION MADE IN BALI ● SHIPPING WORLDWIDE
        </div>
        <div className="flex-item-right navbar-link">
          <a href=".">
            MENU
            <button className="toggleSubMenu" onClick={toggleSubMenu}>
              {isShopMenuOpen ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </a>
        </div>
      </div>
      <nav className="Navbar center">
        <div className="flex-item-center">
          <div className="navbar-home">
            <a href=".">
              <img className="logo" src={logo} alt="KI logo" />
            </a>
            <button className="toggle" onClick={toggle}>
              {isMobile ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </div>
          <ul className={"navbar-links " + (isMobile ? "opened" : "closed")}>
            <li className="navbar-link">
              <a href=".">HOME</a>
            </li>
            <li className="navbar-link">
              <a href="/" className="toggleSubMenu" onClick={toggleSubMenu}>
                SHOP
                {isShopMenuOpen ? <MdExpandLess /> : <MdExpandMore />}
              </a>
            </li>
            <li className="navbar-link">
              <a href=".">PERSONAL SHOPPING</a>
            </li>
            <li className="navbar-link">
              <a href=".">STORY</a>
            </li>
            <li className="navbar-link">
              <a href=".">INSTAGRAM</a>
            </li>
          </ul>
        </div>
        <div className="flex-item-right">
          <ul className={"navbar-links " + (isMobile ? "opened" : "closed")}>
            <li className="navbar-link">
              <a href=".">
                <MdSearch />
              </a>
            </li>
            <li className="navbar-link">
              <a href=".">
                <MdShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
