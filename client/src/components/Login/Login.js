import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <title>Admin</title>
        </Helmet>
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

export default Login;
