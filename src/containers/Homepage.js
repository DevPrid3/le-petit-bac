import React from "react";
import PseudoInput from "../components/PseudoInput/PseudoInput";
import ColorPick from "../components/ColorPick/ColorPick";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Le Petit Bac</h1>
      <PseudoInput />
      <ColorPick />
    </div>
  );
};

export default Homepage;
