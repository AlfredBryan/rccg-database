import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddWorker from "./components/Register/AddWorker";
import Workers from "./components/Workers/Workers";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import History from "./components/About/History";

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
            <Route exact path="/about" component={About} />
            <Route exact path="/history" component={History} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
