import moment from "moment";
import React from "react";

function Time({ time }) {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div className="time-container">
      <span className="time-badge">
        {videoTime}
      </span>
    </div>
  );
}

export default Time;
