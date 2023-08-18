import React, { useState } from "react";

function This() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const thisTypes = () => {
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
        onClick={() => handleButtonClick("this1")}
      >
        change this 1
      </button>
      <div>{selectedButton === "this1" && thisTypes()}</div>
    </div>
    <div className="thrd-btn">
      <button
        className="thrd-animated-btn"
        onClick={() => handleButtonClick("this2")}
      >
        change this 2
      </button>
      <div>{selectedButton === "this2" && thisTypes()}</div>
    </div>
  </div>
  )
}

export default This