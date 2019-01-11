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
            <Link to="/workers">View  All</Link>
            <Link to="/login">Admin</Link>
            <form
              style={{ float: "right" }}
              onSubmit={this.getInfo}
            >
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
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <img src={require("../images/bpics.jpg")} className="fakeimg" style={{ height: "400px" }} alt="background"/>                
                <p>Some text..</p>
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
                <h3>Popular Post</h3>
                <div className="fakeimg">
                  <p>Image</p>
                </div>
                <div className="fakeimg">
                  <p>Image</p>
                </div>
                <div className="fakeimg">
                  <p>Image</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footers">
            <div class="footer">
              <div class="containers">
                <span>
                  <a href="#">
                    <i class="fa fa-twitch fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-facebook fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-rss fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-vine fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-flickr fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin fa-3x fa-fw" />
                  </a>
                </span>
              </div>
            </div>
          </div>
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
          <div className="footers">
            <div class="footer">
              <div class="containers">
                <span>
                  <a href="#">
                    <i class="fa fa-twitch fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-facebook fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-rss fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-vine fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-flickr fa-3x fa-fw" />
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin fa-3x fa-fw" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Homepage;
