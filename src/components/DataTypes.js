import React, { useState } from "react";
import DataTypesArray from "./DataTypesArray";
import DataTypesObject from "./DataTypesObject";
import DataTypesString from "./DataTypesString";
import DataTypesNumber from "./DataTypesNumber";
function DataTypes() {
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
            onClick={() => handleButtonClick("dataTypesArray")}
          >
            Array Methods
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("dataTypesObject")}
          >
            Object Methods
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("dataTypesString")}
          >
            String
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("dataTypesNumber")}
          >
            Number
          </button>
        </div>
      </div>
      {selectedButton === "dataTypesArray" && <DataTypesArray />}
      {selectedButton === "dataTypesObject" && <DataTypesObject />}
      {selectedButton === "dataTypesString" && <DataTypesString />}
      {selectedButton === "dataTypesNumber" && <DataTypesNumber />}
    </div>
  );
}
export default DataTypes;
