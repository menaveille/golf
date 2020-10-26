import React from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {greeting} from "../../portfolio";

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#offre">Notre offre de valeur</a>
          </li>
          <li>
            <a href="#subvention">Subventions et financement</a>
          </li>
          <li>
            <a href="#idee">Banque d'idée</a>
          </li>
          
          <li>
            <a href="#accompagnement">Accompagnement</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
      </header>
    </div>
    </Fade>
  );
}
export default Header;
