import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import NotFound from "./../pages/NotFound";

export default () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
    </Switch>;