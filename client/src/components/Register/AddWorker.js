import React, { Component } from "react";
import "./addWorker.css";
import { Redirect } from "react-router-dom";
import axios from "axios";


class AddWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      department: "",
      phone: "",
      loading: false
    };
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  Change = e => {
    this.setState({
      department: e.target.value
    });
  };

  addWorker = e => {
    let { firstName, lastName, department, phone } = this.state;
    e.preventDefault();
    axios
      .post("/api/admin/create", { firstName, lastName, department, phone })
      .then(response => {
        if (response) {
          this.setState({
            loading: true
          });
        }
      })
      .catch(error => {
        throw error;
      });
  };

  render() {
    let loading = this.state.loading;

    if (loading) {
      return <Redirect to="/" />;
    }
    return (
      <div className="add">
        <form type="submit">
          <h1>Add Workers to Database</h1>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your name.."
            value={this.state.firstName}
            onChange={this.onChangeHandler}
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your last name.."
            value={this.state.lastName}
            onChange={this.onChangeHandler}
          />

          <label for="department">Department</label>
          <select
            id="department"
            name="department"
            onChange={this.Change}
            value={this.state.department}
          >
            <option value="Minister">Minister</option>
            <option value="Choir">Choir</option>
            <option value="Pastor">Pastor</option>
            <option value="Usher">Usher</option>
            <option value="prayerTeam">prayerTeam</option>
          </select>

          <label for="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter phone..."
            value={this.state.phone}
            onChange={this.onChangeHandler}
          />

          <input type="submit" onClick={this.addWorker} value="Submit" />
        </form>
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
export default AddWorker;
