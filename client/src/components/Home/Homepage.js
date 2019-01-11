import React, { Component } from "react";
import FadeIn from "react-fade-in";
import moment from "moment/moment.js";
import axios from "axios";
import "./homepage.css";

import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      errMessage: ""
    };
  }

  getInfo = e => {
    e.preventDefault();
    axios.get(`/api/name/search?search=${this.state.search}`).then(response => {
      this.setState({ errMessage: response.data.noMatch });
      this.setState({ results: response.data.result });
      console.log(response.data.result);
    });
  };

  handleInputChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    let error = this.state.errMessage;
    if (error !== null) {
      return (
        <div>
          <div className="header">
            <img
              src={require("../images/rccglogo.gif")}
              style={{ height: "50px", width: "50px" }}
              alt="logo"
            />
            <h1>Hope Center Workers Database</h1>
          </div>

          <div className="topnav">
            <a href="/">Home</a>
            <Link to="/workers">View All</Link>
            <Link to="/login">Admin</Link>
            <Link to="/about">About</Link>
            <form style={{ float: "right" }} onSubmit={this.getInfo}>
              <input
                type="text"
                placeholder="Search Workers"
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
            </form>
          </div>
          <FadeIn>
            <div className="card">{error}</div>
          </FadeIn>
          <div className="row">
            <div className="leftcolumn">
              <div className="card">
                <h2>The Hope Center Parish</h2>
                <img
                  src={require("../images/bpics.jpg")}
                  className="fakeimg"
                  style={{ height: "400px" }}
                  alt="background"
                />
              </div>
            </div>
            <div className="rightcolumn">
              <div className="card">
                <h2>About Hope Center</h2>
                <div className="fakeimg" style={{ height: "100px" }}>
                  Image
                </div>
              </div>
              <div className="card">
                <h1>Contact Us</h1>
                <form onSubmit={this.handleSubmit}>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                    onChange={this.handleChange}
                    value={this.state.name}
                  />

                  <label for="lname">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter last email.."
                    onChange={this.handleChange}
                    value={this.state.email}
                  />

                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={this.state.message}
                    placeholder="Enter message.."
                    style={{ height: "200px" }}
                    onChange={this.handleChange}
                  />

                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="container">
              <ul class="social-icon animate pull-right">
                <li>
                  <p className="copy">
                    Copyright © All Rights Reserved 2020 | Design & Development
                    by Bryan
                  </p>
                </li>
                <li>
                  <a href="#" title="facebook" target="_blank">
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
    } else {
      let result = this.state.results;
      return (
        <div>
          <div className="header">
            <img
              src={require("../images/rccglogo.gif")}
              style={{ height: "50px", width: "50px" }}
              alt="logo"
            />
            <h1>Hope Center Workers Database</h1>
          </div>

          <div className="topnav">
            <a href="/">Home</a>
            <form
              style={{ float: "right", marginRight: "40px" }}
              onSubmit={this.getInfo}
            >
              <input
                className="searchBox"
                type="text"
                placeholder="Search for..."
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
            </form>
          </div>
          {result.map(r => (
            <div key={r._id} className="contact">
              <div className="contact1">{r.firstName}</div>
              <div className="contact2">{r.lastName}</div>
              <div className="contact3">{r.department}</div>
              <div className="contact4">{r.phone}</div>
              <div className="contact5">
                {moment(r.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              </div>
            </div>
          ))}
          <footer class="footer">
            <div class="container">
              <ul class="social-icon animate pull-right">
                <li>
                  <p className="copy">
                    Copyright © All Rights Reserved 2020 | Design & Development
                    by Bryan
                  </p>
                </li>
                <li>
                  <a href="#" title="facebook" target="_blank">
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
}

export default Homepage;
