import React, { useState } from "react";

function Functions() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const functionTypes = () => {
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
          onClick={() => handleButtonClick("function1")}
        >
          change function
        </button>
        <div>{selectedButton === "function1" && functionTypes()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("function2")}
        >
          change function 2
        </button>
        <div>{selectedButton === "function2" && functionTypes()}</div>
      </div>
    </div>
  )
}

export default Functions