import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import moment from "moment/moment.js";

class Workers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: []
    };
  }

  componentDidMount() {
    axios.get("/api/workers").then(response => {
      this.setState({ workers: response.data });
      console.log(response.data);
    });
  }

  render() {
    let worker = this.state.workers;
    return (
      <div>
        <Helmet>
          <title>Workers</title>
        </Helmet>
        <div className="header">
          <img
            src={require("../images/rccglogo.gif")}
            style={{ height: "50px", width: "50px" }}
            alt="logo"
          />
          <h1>Hope Center Worker's Database</h1>
        </div>
        <div className="topnav">
          <a href="/">Home</a>
          <a href="/login">Admin</a>
          <a href="/about">About</a>
        </div>
        {worker.map(w => (
          <div className="container">
            <div key={w._id} className="contact">
              <div className="contact1">{w.firstName}</div>
              <div className="contact2">{w.lastName}</div>
              <div className="contact3">{w.department}</div>
              <div className="contact4">{w.phone}</div>
              <div className="contact5">
                {moment(w.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              </div>
            </div>
          </div>
        ))}
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
                  target="_blank"
                  rel="noopener noreferrer"
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
export default Workers;
