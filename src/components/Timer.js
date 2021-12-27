import React, { useEffect, useState } from "react";
import moment from "moment";
import "../assets/styles/Timer.css";

const Timer = ({ setShowTimer }) => {
  const targetTime = moment("2022-08-15 00:00");
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(
    targetTime.diff(currentTime) > 0 ? targetTime.diff(currentTime) : 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    if (timeBetween === 0) setShowTimer(false);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullcontainer p-10">
      <div className="context">
        <p>Event Starts in</p>
      </div>
      <div className="container">
        <div className="time_container">
          <span>{targetTime.diff(currentTime, "days")}</span>
          <div>
            <p>days</p>
          </div>
        </div>

        <div className="time_container">
          <span>{timeBetween.hours()}</span>
          <div>
            <p>hours</p>
          </div>
        </div>
        <div className="time_container">
          <span>{timeBetween.minutes()}</span>
          <div>
            <p>minutes</p>
          </div>
        </div>
        <div className="time_container">
          <span>{timeBetween.seconds()}</span>
          <div>
            <p>seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
