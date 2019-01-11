import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loading: false,
      errMessage: ""
    };
  }

  adminLogin = e => {
    let username = this.state.username;
    let password = this.state.password;
    e.preventDefault();
    axios
      .post("/api/admin/login", { username, password })
      .then(response => {
        if (response) {
          this.setState({
            loading: true
          });
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch(error => {
        if (error) {
          this.setState({
            errMessage: error
          });
        }
      });
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let loading = this.state.loading;
    if (loading) {
      return <Redirect to="/create" />;
    }
    return (
      <div>
        <div className="topnav">
          <a href="/">Home</a>
        </div>
        <div className="main">
          <div className="container">
            <div className="login-form">
              <div className="main-div">
                <div className="panel">
                  <h2>Admin Login</h2>
                </div>
                <form type="submit">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <button onClick={this.adminLogin} className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footers">
          <div className="footer">
            <div className="containers">
              <span>
                <a href="#">
                  <i className="fa fa-twitch fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-facebook fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-rss fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-vine fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-flickr fa-3x fa-fw" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-3x fa-fw" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
