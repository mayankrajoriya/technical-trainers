import React, { useState } from "react";
import "./stylesheet/navbar.css";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [hamburgur, setHamburgur] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 71) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleClick = () => {
    setHamburgur(!hamburgur);
  };
  return (
    <nav
      onScroll={changeBackground}
      className={
        !navbar
          ? "navbar flex justify-between items-center text-white "
          : "navbar flex justify-between items-center text-white bg-blue-700"
      }
    >
      <div className="logo flex gap-2 items-center">
        <img src={logo} width={50} alt="" />
        <h1 className="logo-text font-bold text-2xl">TechnicalTrainers</h1>
      </div>
      <div className="hamburgur">
        <TiThMenu className="h-full w-full" onClick={handleClick} />
      </div>

      <div>
        <ul className={(hamburgur)?"ham":""}>
          <li>
            <a href="#home" className="hover:text-black">Home</a>
          </li>
          <li>
          <a href="#about" className="hover:text-black">About</a>
          </li>
          <li>
          <a href="#courses" className="hover:text-black">Courses</a>
          </li>
          <li>
          <a href="#contact" className="hover:text-black">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
