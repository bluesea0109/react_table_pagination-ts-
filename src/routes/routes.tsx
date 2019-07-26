import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Login from "../components/login";
import Registration from "../components/registration";
import ForgotPassword from "../components/forgotPassword";
import ResetPassword from "../components/resetPassword";
import newTestForm from "./New-form-test";
import newCaseForm from "./NewCaseForm";

class Router extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/create-account" component={Registration} />
          <Route path="/reset-password/:resetToken" component={ResetPassword} />
          <Route
            exact={true}
            path="/forgot-password"
            component={ForgotPassword}
          />
          <Route exact={true} path="/test" component={newTestForm} />
          <Route exact={true} path="/create-case" component={newCaseForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
