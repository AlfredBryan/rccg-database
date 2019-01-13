import React, { Component } from "react";
import FadeIn from "react-fade-in";
import moment from "moment/moment.js";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./homepage.css";

import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      name: "",
      email: "",
      message: "",
      errMessage: ""
    };
  }

  sendMail = e => {
    let { name, email, message } = this.state;
    e.preventDefault();
    axios
      .post("/mail", { name, email, message })
      .then(response => {
        if (response) {
          alert("Message Sent");
        }
      })
      .catch(error => {
        if (error) {
          alert("Message Error");
        }
      });
  };

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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let error = this.state.errMessage;
    if (error !== null) {
      return (
        <div>
          <Helmet>
            <title>Hope Center</title>
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
            <div className="card1">{error}</div>
          </FadeIn>
          <div className="home-main">
            <div className="center">
              <h1>WELCOME TO OUR CHURCH</h1>
            </div>
          </div>
          <section id="contact" class="content-section text-center">
            <div class="contact-section">
              <div class="container">
                <h2>Contact Us</h2>
                <p>Feel free to reach us by filling the contact form</p>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <form className="form-horizontal" type="submit">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Name... "
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Email... "
                          name="email"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                      </div>
                      <div className="form-group ">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          class="form-control"
                          placeholder="Message"
                          name="message"
                          onChange={this.handleChange}
                          value={this.state.message}
                        />
                      </div>
                      <button
                        type="submit"
                        onClick={this.sendMail}
                        class="btn btn-default"
                      >
                        Send Message
                      </button>
                    </form>

                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </section>
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
            <h1>Hope Center Worker's Database</h1>
          </div>

          <div className="topnav">
            <a href="/">Home</a>
            <Link to="/workers">View All</Link>
            <Link to="/login">Admin</Link>
            <Link to="/about">About</Link>
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
            <div className="container">
              <div key={r._id} className="contact">
                <div className="contact1">{r.firstName}</div>
                <div className="contact2">{r.lastName}</div>
                <div className="contact3">{r.department}</div>
                <div className="contact4">{r.phone}</div>
                <div className="contact5">
                  {moment(r.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </div>
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
                  <a
                    href="https://web.facebook.com/ibukys.ogar"
                    title="facebook"
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
}

export default Homepage;
