import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Nav.css";
import Dropdown from "./Dropdown";
import { NavItems } from "./NavItems";

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        {NavItems.map((item) => {
          return (
            <li
              className={item.cName}
              onMouseEnter={() => setDropdown(item.id)}
              onMouseLeave={() => setDropdown("")}
            >
              <NavLink
                to={item.path}
                activeClassName="active"
                className="nav-links"
              >
                {item.title} <i className="fas fa-caret-down" />
              </NavLink>
              {dropdown === item.id && <Dropdown title={item.sub} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
