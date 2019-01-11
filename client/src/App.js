import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddWorker from "./components/Register/AddWorker";
import Workers from "./components/Workers/Workers";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/create" component={AddWorker} />
            <Route exact path="/workers" component={Workers} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
