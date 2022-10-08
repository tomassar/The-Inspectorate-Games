import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboard from "../components/Admin/AdminDashboard";
import CreateQuestionRouter from "./Admin/CreateQuestionRouter";

const AdminRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/admin/create-question"
            component={CreateQuestionRouter}
          />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default AdminRoutes;
