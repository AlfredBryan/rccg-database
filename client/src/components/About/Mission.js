import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Mission extends Component {
  render() {
    return (
      <div>
          <Helmet>
              <title>Mission and Vision</title>
          </Helmet>
        <div className="topnav">
          <a href="/">Home</a>
          <Link to="/workers">View All</Link>
          <Link to="/login">Admin</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="bannerA">
          <div className="centered">
            <h1>WHO WE ARE</h1>
          </div>
        </div>
        <div className="about-links">
          <Link to="/history" className="history">
            Our History
          </Link>
          <Link to="/beliefs" className="beliefs">
            Our Beliefs
          </Link>
          <Link to="/mission" className="mission">
            Mission and Vision
          </Link>
          <Link to="/leaders" className="leaders">
            Our Leaders
          </Link>
        </div>
        <div className="container">
          <div className="mission1">
            <h1>MISSION AND VISION</h1>
            <p>To make heaven.</p>
            <p>To take as many people with us.</p>
            <p>To have a member of RCCG in every family of all nations.</p>
            <p>To accomplish No. 1 above, holiness will be our lifestyle.</p>
            <p>
              To accomplish No. 2 and 3 above, we will plant churches within
              five minutes walking distance in every city and town of developing
              countries and within five minutes driving distance in every city
              and town of developed countries.
            </p>
            <p>
              We will pursue these objectives until every Nation in the world is
              reached for the Lord Jesus Christ
            </p>
          </div>
        </div>
        <div className="section">
          <img
            src={require("../images/rccglogo.gif")}
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
          <p>
            Jesus Christ the same yesterday, and today, and for ever. Hebrews
            13: 8
          </p>
        </div>
        <footer class="footer">
          <div class="container">
            <ul class="social-icon animate pull-right">
              <li>
                <p className="copy">
                  Copyright © All Rights Reserved 2020 | Design & Development by
                  Bryan
                </p>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/ibukys.ogar"
                  title="facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" title="twitter" target="_blank">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="google plus" target="_blank">
                  <i class="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
export default Mission;
