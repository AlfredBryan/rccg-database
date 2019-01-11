import React, { Component } from "react";
import axios from "axios";
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
        </div>
        {worker.map(w => (
          <div key={w._id} className="contact">
            <div className="contact1">{w.firstName}</div>
            <div className="contact2">{w.lastName}</div>
            <div className="contact3">{w.department}</div>
            <div className="contact4">{w.phone}</div>
            <div className="contact5">
              {moment(w.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
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
export default Workers;
