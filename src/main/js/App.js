import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Login from "./components/Login"
import Login2 from "./components/Login2"

export class App extends Component {
    render() {
          return (
            <div>
              <Router>
                <div className="container">
                  <Switch>
                    <Route exact path="/">
                      <Login />
                    </Route>
                    <Route path="/login">
                      <Login2 />
                    </Route>
                 </Switch>
                </div>
              </Router>
            </div>
          );
      }
}

ReactDOM.render(<App />, document.querySelector("#app"));