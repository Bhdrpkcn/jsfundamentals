import React, { useState } from "react";

function LogicalOperators() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const logicTypes = () => {
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
          onClick={() => handleButtonClick("logic1")}
        >
          change logic1
        </button>
        <div>{selectedButton === "logic1" && logicTypes()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("logic2")}
        >
          change logic 2
        </button>
        <div>{selectedButton === "logic2" && logicTypes()}</div>
      </div>
    </div>
  )
}

export default LogicalOperators