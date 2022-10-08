import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddChallengeQuestion from "../../components/addChallengeQuestion/AddChallengeQuestion";

import CreateMCQQuestion from "../../components/Admin/questionForms/CreateMCQQuestion";
import CreateFillInBlankQuestion from "../../components/Admin/questionForms/CreateFillInBlankQuestion";
import CreateFindInPictureQuestion from "../../components/Admin/questionForms/CreateFindInPictureQuestion";
import CreateShortAnswerQuestion from "../../components/Admin/questionForms/CreateShortAnswerQuestion";
import AdminRoutes from "../AdminRoutes";

const CreateQuestionRouter = () => {
  const path = "/admin/create-question";

  return (
    <Router>
      <div>
        <Switch>
          <Route path={`${path}/mcq`} component={CreateMCQQuestion} />
          <Route
            path={`${path}/fill-in-blank`}
            component={CreateFillInBlankQuestion}
          />
          <Route
            path={`${path}/find-in-picture`}
            component={CreateFindInPictureQuestion}
          />
          <Route
            path={`${path}/short-answer`}
            component={CreateShortAnswerQuestion}
          />
          <Route path={`${path}`} component={AddChallengeQuestion} />
          <Route path="/admin" component={AdminRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default CreateQuestionRouter;
