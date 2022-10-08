import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import Transition from "../Transition";

const AddChallengeQuestion = () => {
  const addChallengeQuestion = (challengeName) => {
    switch (challengeName) {
      case "MCQ":
        break;
      case "Fill in blank":
        break;
      case "Find in picture":
        break;
      case "Answer a question":
        break;
      default:
        console.error("No such challenge type");
        break;
    }
  };

  const history = useHistory();

  return (
    <Transition>
      <main className="addChallengeQuestionComponent">
        <Link to="/admin">Back</Link>
        <header>
          <h1>Add Challenge Question</h1>
        </header>
        <section>
          {/* <Link to={() => history} */}
          <article>
            <img
              src="./resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="./resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="./resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="./resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button onClick={() => addChallengeQuestion("MCQ")}>MCQ</button>
          </article>
          <article>
            <img
              src="./resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="./resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="./resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="./resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button onClick={() => addChallengeQuestion("Fill in blank")}>
              Fill in blank
            </button>
          </article>
          <article>
            <img
              src="./resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="./resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="./resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="./resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button onClick={() => addChallengeQuestion("Find in picture")}>
              Find in picture
            </button>
          </article>
          <article>
            <img
              src="./resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="./resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="./resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="./resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button onClick={() => addChallengeQuestion("Answer a question")}>
              Answer a question
            </button>
          </article>
        </section>
      </main>
    </Transition>
  );
};

export default withRouter(AddChallengeQuestion);
