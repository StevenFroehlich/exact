import React from "react";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#area01">Area 01</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#area02">Area 02</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#area03">Area 03</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#areaContact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
