import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Leaderboard from "../leaderboard/Leaderboard";
import Transition from "../Transition";
import Chart from "../charts/Chart";

const Home = () => {
  //const [user, setUser] = useState(""); to be implemented when this is a functional component

  return (
    <Transition>
      <div className="container_home">
        <div className="upper">
          <p>THE INSPECTORATE GAMES</p>
        </div>
        <div className="middle">
          <div className="leaderboard">
            <Leaderboard />
          </div>
          <div className="leaderboard-right">
            <h1>Welcome, user!</h1>
            <Link className="btn-link" to="/takeChallenge">
              Take challenge
            </Link>
            <Link className="btn-link" to="/home">
              View past challenges
            </Link>
            <div className="chart">
              <h2>Challenges completed this week</h2>
              <Chart className="chart" />
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </Transition>
  );
};

export default Home;
