import React, { useState } from "react";
import ThisDefiniton from "./ThisDefiniton";
import ThisContext from "./ThisContext";
import ThisArrow from "./ThisArrow";

function This() {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  return (
    <div className="body">
      <div className="sidebar">
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("thisDefinition")}
          >
            What is This Keyword
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("thisContext")}
          >
            {} and Context in Js
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("thisArrow")}
          >
            This Funciton in Normal and Arrow Functions
          </button>
        </div>
      </div>

      {selectedButton === "thisDefinition" && <ThisDefiniton /> }
      {selectedButton === "thisContext" && <ThisContext /> }
      {selectedButton === "thisArrow" && <ThisArrow /> }
    </div>
  );
}

export default This;
