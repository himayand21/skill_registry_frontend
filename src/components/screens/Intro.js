/* eslint-disable react/style-prop-object */
import React from "react";
import cartoon from "./introComponents/image.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-message">
        <div className="intro-title title">WIPRO SKILL REGISTRY</div>
        <ul className="intro-list">
          <li>
            <div>
              <i className="fas fa-life-ring fa-spin intro-icon" />
            </div>
            <div>
              Showcase your skills to improve your visibility among the top
              managers in WIPRO.
            </div>
          </li>
          <li>
            <div>
              <i className="fas fa-life-ring fa-spin intro-icon" />
            </div>
            <div>Find people who can help you learn your desired skill.</div>
          </li>
          <li>
            <div>
              <i className="fas fa-life-ring fa-spin intro-icon" />
            </div>
            <div>Find the best talents in WIPRO in one dedicated platform.</div>
          </li>
          <li>
            <div>
              <i className="fas fa-life-ring fa-spin intro-icon" />
            </div>
            <div>
              Build a team and improve performance and efficiency on
              deliverables.
            </div>
          </li>
        </ul>
        <Link className="intro-link" to="/signup">
          Register NOW !
        </Link>
      </div>
      <div className="intro-image-wrapper">
        <img src={cartoon} alt="office" className="intro-image" />
      </div>
    </div>
  );
};

export default Intro;
