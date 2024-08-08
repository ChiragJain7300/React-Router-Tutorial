import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header text-black bg-white flex justify-evenly p-2 place-items-center">
        <div className="logoSection">
          <img
            src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png"
            alt="logoImg"
            className="w-[150px]"
          />
        </div>
        <div className="linksNavSection">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mx-5 text-lg font-semibold ${
                isActive ? "text-orange-700" : "text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `mx-5 text-lg font-semibold ${
                isActive ? "text-orange-700" : "text-black"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mx-5 text-lg font-semibold ${
                isActive ? "text-orange-700" : "text-black"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mx-5 text-lg font-semibold ${
                isActive ? "text-orange-700" : "text-black"
              }`
            }
          >
            Github
          </NavLink>
        </div>
        <div className="buttonSection">
          <button className="mx-5 text-lg font-semibold">Log in</button>
          <button className="px-4 py-2 bg-orange-700 text-white rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
