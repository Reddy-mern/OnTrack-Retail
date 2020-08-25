import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home.component";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books/:page" component={Home} />
        <Route path="/books/:page?search=''" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
