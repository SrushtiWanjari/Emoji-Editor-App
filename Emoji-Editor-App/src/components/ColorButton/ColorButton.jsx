import React from "react";
import "./ColorButton.css";

function ColorButton({ bgColor, setBgColor }) {
  return (
    <div
      className="color"
      onClick={() => {
        setBgColor(bgColor);
      }}
      style={{ backgroundColor: bgColor }}
    ></div>
  );
}

export default ColorButton;
