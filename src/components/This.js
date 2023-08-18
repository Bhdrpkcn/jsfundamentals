import React, { useState } from "react";

function This() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const thisTypes1 = () => {
    return (
      <div className="main-content">
        test array
        <textarea className="text-area">arrayxxarray</textarea>
      </div>
    );
  };
  const thisTypes2 = () => {
    return (
      <div className="main-content">
        test array
        <textarea className="text-area">arrayxxarray</textarea>
      </div>
    );
  };
  const thisTypes3 = () => {
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
        What is This Keyword
      </button>
      <div>{selectedButton === "this1" && thisTypes1()}</div>
    </div>
    <div className="thrd-btn">
      <button
        className="thrd-animated-btn"
        onClick={() => handleButtonClick("this2")}
      >
        {} and Context in Js
      </button>
      <div>{selectedButton === "this2" && thisTypes2()}</div>
    </div>
    <div className="thrd-btn">
      <button
        className="thrd-animated-btn"
        onClick={() => handleButtonClick("this2")}
      >
        This Funciton in Normal and Arrow Functions
      </button>
      <div>{selectedButton === "this2" && thisTypes3()}</div>
    </div>
  </div>
  )
}

export default This