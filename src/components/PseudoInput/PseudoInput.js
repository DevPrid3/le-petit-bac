import React from "react";
import "./PseudoInput.css";

const PseudoInput = () => {
  return (
    <div className="container">
      <label for="pseudo">Pseudo :</label>
      <input id="pseudo" name="pseudo" type="text" />
    </div>
  );
};

export default PseudoInput;
