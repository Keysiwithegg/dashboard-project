import React, { useState } from "react";
import "./bottom.css";

import Chart from "react-apexcharts";

const Bottom = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#01565B", "#5ABA8A"],
      chart: {
        id: "basic-bar",
        tootbar: {
          show: true,
        },
      },

      xaxis: {
        categories: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      },
    },
  });

  return (
    <div className="bottom flex">
      <div className="graphDiv">
        <span className="title">All Activities (Graphical View)</span>
      </div>
    </div>
  );
};

export default Bottom;
