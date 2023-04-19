import React, { useState } from "react";
import CSS from "./styles.css";
const ToggleButton = ({ children, onToggle }) => {
  const [toggle, setToggle] = useState(false);
  const toggleClass = toggle ? CSS.toggled : CSS.notToggled;

  const handleToggleClick = ({ children, onToggle }) => {
    onToggle(toggle ? false : true);
  };
  const handleElementClick = (e) => {
    e.stopPropagation();
  };
  return (
    <button
      className={toggleClass + ` w-5`}
      onClick={handleToggleClick}
      onMouseDown={() => {
        handleElementClick(e);
      }}
    >
      {children}
      <DehazeIcon
        className="mobile-nav-toggle d-xl p-2"
        sx={{ fontSize: "30px" }}
      />
    </button>
  );
};
export default ToggleButton;
