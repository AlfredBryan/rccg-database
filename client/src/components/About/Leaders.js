import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Leaders extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Our Leaders</title>
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
          <div className="leader-main">
            <h1>OUR STRUCTURE</h1>
            <h3>GOVERNING COUNCIL</h3>
          </div>
          <div className="leader">
            Pastor E.A Adeboye General Overseer And Chairman Of Governing
            Council
          </div>
          <div className="leader">
            Pastor (Mrs) Folu Adeboye, Mother In-Isreal And Wife Of The General
            Overseer Of RCCG
          </div>
          <div className="leader">
            Pastor J.H Abiona Deputy General Overseer And Member Of Governing
            Council (Rtd)
          </div>
          <div className="leader">
            Pastor J.A Obayemi National Overseer RCCG
          </div>
          <div className="leader">
            Pastor J.F Odesola (National Secretary RCCG Nigeria)
          </div>
          <div className="leader">
            Pastor Joseph Adeyokunu (RCCG Church Treasurer)
          </div>
          <div className="leader">
            Pastor Ezekiel Odeyemi AGO(Education and Training)
          </div>
          <div className="leader">Pastor Elijah Daramola AGO(Doctrines)</div>
          <div className="leader">
            Pastor Ayodele Samuel Adeloye AGO(Church Growth)
          </div>
          <div className="leader">
            Pastor Peter Amenkhienan AGO(Young Adults and Youths)
          </div>
          <div className="leader-sec">
            <h3>SPECIAL ASSISTANTS TO THE GENERAL OVERSEER</h3>
          </div>
          <div className="leader">
            Pastor Abraham A. Haastrup SATGO(Oceania/Pacific)
          </div>
          <div className="leader">
            Pastor Edward Sunday Akande SATGO(Special Duties Technical)
          </div>
          <div className="leader">Pastor Remi Akintunde SATGO(Asia Region)</div>
          <div className="leader">
            Pastor Charles Adegoke SATGO(Middle East Region)
          </div>
          <div className="leader">
            Pastor Joseph Olaade SATGO(Sino Asia Region)
          </div>
          <div className="leader">Pastor Agu Irukwu SATGO(United Kingdom)</div>
          <div className="leader">Pastor Dele Olowu SATGO(Europe Mainland)</div>
          <div className="leader">Pastor James Fadel SATGO(North America)</div>
          <div className="leader">Pastor Kola Bolanta SATGO(South America)</div>
          <div className="leader">
            Pastor Tosin Macauley SATGO(North Africa)
          </div>
          <div className="leader">
            Pastor Belemina Obunge SATGO(Special Duties)
          </div>
          <div className="leader">Pastor J. T. Kalejaiye SATGO(Evangelism)</div>
          <div className="leader">Pastor Peter Olawale SATGO(Prayer)</div>
          <div className="leader">Pastor Okey Mofunaya SATGO(Security)</div>
          <div className="leader">
            Pastor Brown Oghene Oyitso SATGO(Missions)
          </div>
          <div className="leader">
            Pastor James Dagunduro SATGO(West Coast I, II & III)
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
export default Leaders;
