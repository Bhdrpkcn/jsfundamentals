import React, { useState } from "react";
import DataTypesArray from "./DataTypesArray";
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
            onClick={() => handleButtonClick("dataTypes2")}
          >
            Object Methods
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("dataTypes3")}
          >
            String
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("dataTypes4")}
          >
            Number
          </button>
        </div>
      </div>
      {selectedButton === "dataTypesArray" && <DataTypesArray />}
    </div>
  );
}
export default DataTypes;
