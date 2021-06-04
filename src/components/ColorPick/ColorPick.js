import React from "react";
import "./ColorPick.css";

const ColorPick = () => {
  return (
    <div className="container">
      <label for="color">Color:</label>
      <input id="color" name="color" type="color" />
    </div>
  );
};

export default ColorPick;
