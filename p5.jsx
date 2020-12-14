import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import Header from "./components/header/Header";
import States from "./components/states/States";
import Example from "./components/example/Example";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <div className="nahh">
        <ul>
          <li>
            <Link to="/states">States</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/states" component={States}></Route>
        <Route path="/example" component={Example}></Route>
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById("reactapp")
);
