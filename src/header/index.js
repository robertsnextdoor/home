import React, { useState } from "react";
import "./style.css";
import { VscListFilter, VscClose, VscCoffee } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { socialProfiles } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
          <button className="menu_button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscListFilter /> : <VscListFilter />}
          </button>
          <Themetoggle/>
          <Link to="https://spreadthemovie.printful.me/">
            <button className="menu_button nav_ac">Buy our merch!<VscCoffee/></button>
          </Link>
          </div>
        </div>
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                      <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                      <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                      <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                      <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                  <Link to="https://spreadthemovie.printful.me/">
                    <button className="menu_button nav_ac">Buy our merch!<VscCoffee/></button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-5">
            <div className="d-flex">
                <a href={socialProfiles.robinstagram}>Rob Instagram</a>
                <a href={socialProfiles.robertinstagram}>Robert Instagram</a>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
