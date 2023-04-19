import React, { useState, useEffect } from "react";
// import "./styles.css";

import ProgressBar from "@ramonak/react-progress-bar";
// or other library

function ProgressBarExample({ valueOfProgressBar }) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 1000);

    setProgressValue((prevValue) => prevValue + 1);
    if (progressValue >= 100) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ProgressBar
        value={10}
        max={100}
        completed={valueOfProgressBar}
        bgColor="#6d948b"
      />
      {/* <p>{progressValue} / 100</p> */}
    </>
  );
}
export default ProgressBarExample;
