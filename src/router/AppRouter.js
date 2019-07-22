import React, { Component } from "react";
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import PageNotFound from "./PageNotFound";
// import Header from "./Header";
import {
  Blogs,
  FormCreate,
  FormUpdate,
  FormCreateAsync,
  FormUpdateAsync
} from "../blogs";

// import Blogs from "./Blogs";

class AppRouter extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <div style={{ marginBottom: "20px" }}>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>{" "}
          <NavLink to="/blogs/create" exact activeClassName="active-link">
            create blog
          </NavLink>{" "}
          <NavLink to="/blogs/create-async" exact activeClassName="active-link">
            create blog Async
          </NavLink>{" "}
          <NavLink to="/blogs" exact activeClassName="active-link">
            list blogs
          </NavLink>{" "}
          <NavLink to="/about" exact activeClassName="active-link">
            About
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blogs/create" exact component={FormCreate} />
          <Route path="/blogs/create-async" exact component={FormCreateAsync} />
          <Route path="/blogs/update/:id" exact component={FormUpdate} />
          <Route
            path="/blogs/update-async/:id"
            exact
            component={FormUpdateAsync}
          />
          <Route path="/blogs" exact component={Blogs} />

          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default AppRouter;
