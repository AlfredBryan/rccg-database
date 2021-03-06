import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
          <Helmet>
              <title>About</title>
          </Helmet>
        <div className="topnav">
          <a href="/">Home</a>
          <Link to="/workers">View All</Link>
          <Link to="/login">Admin</Link>
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
        <div id="about-main" className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>Our History</h1>
              <p>
                In July 1909, a son was born into the Akindayomi family of Ondo
                State of Nigeria. Even though this child grew up surrounded by
                idol worshippers,
              </p>
              <Link to="/history">Read more...</Link>
            </div>
            <div className="col-sm-6">
              <h1>Our Beliefs</h1>
              <p>
                We believe that the entire Scripture, both Old and New Testament
                are written by the inspiration of the Holy Spirit – II Tim.
                3:16-17
              </p>
              <Link to="/beliefs">Read more...</Link>
            </div>
          </div>
        </div>
        <div id="about-main1" className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>Mission and Vision</h1>
              <p>To make heaven. To take as many people with us.</p>
              <Link to="/mission">Read more...</Link>
            </div>
            <div className="col-sm-6">
              <h1>Our Leaders</h1>
              <p>
                Pastor E.A Adeboye, General Overseer RCCG Worldwide and Chairman
                of Governing Council.
              </p>
              <Link to="/leaders">Read more...</Link>
            </div>
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

export default About;
