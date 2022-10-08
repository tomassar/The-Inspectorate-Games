import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import AdminRoutes from "./AdminRoutes";
import AddChallengeQuestion from "../components/addChallengeQuestion/AddChallengeQuestion";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/admin" component={AdminRoutes} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
