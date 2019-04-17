import React, { Component } from "react";
import "./resetcss.css";
import "./App.css";
import Home from "./containers/Home";
import Collection from "./containers/Collection";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main__container">
            <Switch>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route path="/:url" render={props => <Collection {...props} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
