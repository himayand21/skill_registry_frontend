import React from "react";
import { Link } from "react-router-dom";
import { navConfig } from "../constants";
import logo from "../screens/introComponents/wipro.png";

const NavBar = props => {
  const { authorized, urlPrefix, name } = props;
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>
          <Link
            to={
              authorized === "none"
                ? navConfig[authorized].default
                : urlPrefix + navConfig[authorized].default
            }
          >
            <span className="navbar-brand brand">
              <img
                src={logo}
                alt="wipro"
                height={48}
                width={60}
                className="wipro-logo"
              />
              Wipro Skill Registry
            </span>
          </Link>
        </div>
        <div class="collapse navbar-collapse" id="navigation">
          <ul className="nav navbar-nav navbar-right">
            {name ? <li className="welcome">Hi, {name}</li> : null}
            {navConfig[authorized].navLinks.map(link => (
              <li key={"link" + link.label}>
                <Link to={link.root ? link.route : urlPrefix + link.route}>
                  <span className={"glyphicon " + link.icon} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
