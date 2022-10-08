import React, { useState } from "react";
import PropTypes from "prop-types";
import Leaderboard_info from "./Leaderboard_info.json"; //has the arrays today, month and year
import "./Leaderboard.css";
import Transition from "../Transition";

const Leaderboard = ({ backgroundColor, headerColor, barColor, ...props }) => {
  const [scope, setScope] = useState("today"); //day, month or year
  const [leaderboardNamesAndPoints, setLeaderboardNamesAndPoints] = useState(
    Leaderboard_info.today
  );

  const dayMonthAndYear = ["today", "month", "year"];

  const handleClick = (DayMonthYear) => {
    setScope(DayMonthYear);
    switch (DayMonthYear) {
      case "today":
        setLeaderboardNamesAndPoints(Leaderboard_info.today);
        break;
      case "month":
        setLeaderboardNamesAndPoints(Leaderboard_info.month);
        break;
      case "year":
        setLeaderboardNamesAndPoints(Leaderboard_info.year);
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <p className="leaderboard_title">LEADERBOARD</p>
      <div
        className="leaderboard_section"
        style={{ backgroundColor: headerColor }}
      >
        <div className="leaderboard_tabs">
          <ul>
            {dayMonthAndYear.map((DayMonthYear, index) => {
              return (
                <li
                  key={index}
                  data-li="{DayMonthYear}"
                  className={DayMonthYear === scope ? "active" : undefined}
                  onClick={() => handleClick(DayMonthYear)}
                >
                  {DayMonthYear}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="leaderboard_wrap"
          style={{ backgroundColor: backgroundColor }}
        >
          {/* Here each inspector is displayed */}
          <div className="leaderboard_item" style={{ display: "block" }}>
            {leaderboardNamesAndPoints.map((inspector, index) => {
              return (
                <div className="leaderboard_mem" key={index}>
                  <div className="img">
                    <img src="resources/profile_pic.png" alt="picture" />
                  </div>
                  <div className="name_bar">
                    <p>
                      <span>{index + 1}.</span> {inspector.name}
                    </p>
                    <div className="bar_wrap">
                      <div
                        className="inner_bar"
                        style={{
                          width: `${100 - index * 10}%`, //kinda useless formula to make the bars decrease their length as inspectors have less points
                          backgroundColor: barColor,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="points">{inspector.points} points</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  // What color to use for the div that displays "Today", "Month" and "Year"
  headerColor: PropTypes.string,
  //Color for the bar
  barColor: PropTypes.string,
};

Leaderboard.defaultProps = {
  backgroundColor: "rgb(243, 245, 228)",
  headerColor: "#fb444491",
  barColor: "#e57070",
};

export default Leaderboard;
