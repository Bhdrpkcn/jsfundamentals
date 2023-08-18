import React, { useState } from "react";

function DataTypes() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const dataTypes1 = () => {
    return (
      <div className="main-content">
        test array
        <textarea className="text-area">arrayxxarray</textarea>
      </div>
    );
  };
  return (
    <div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("dataTypes1")}
        >
          change data types 1
        </button>
        <div>{selectedButton === "dataTypes1" && dataTypes1()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("dataTypes2")}
        >
          Change dataTypes 2
        </button>
        <div>{selectedButton === "dataTypes2" && dataTypes1()}</div>
      </div>
    </div>
  );
}

export default DataTypes;
