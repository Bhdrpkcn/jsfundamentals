import React, { useState } from "react";

function DataTypes() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const dataTypes1 = () => {
    return (
      <div className="main-content">
        array definition
        <textarea className="text-area">array</textarea>
      </div>
    );
  };
  const dataTypes2 = () => {
    return (
      <div className="main-content">
        object definition
        <textarea className="text-area">object</textarea>
      </div>
    );
  };
  const dataTypes3 = () => {
    return (
      <div className="main-content">
        String definition
        <textarea className="text-area">string</textarea>
      </div>
    );
  };
  const dataTypes4 = () => {
    return (
      <div className="main-content">
        Number definition
        <textarea className="text-area">number</textarea>
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
          Array Methods
        </button>
        <div>{selectedButton === "dataTypes1" && dataTypes1()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("dataTypes2")}
        >
          Object Methods
        </button>
        <div>{selectedButton === "dataTypes2" && dataTypes2()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("dataTypes3")}
        >
          String
        </button>
        <div>{selectedButton === "dataTypes3" && dataTypes3()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("dataTypes4")}
        >
          Number
        </button>
        <div>{selectedButton === "dataTypes4" && dataTypes4()}</div>
      </div>
    </div>
  );
}

export default DataTypes;
