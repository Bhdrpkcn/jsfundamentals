import React, { useState } from "react";

function LogicalOperators() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const logicTypes1 = () => {
    return (
      <div className="main-content">
        && And definiton
        <textarea className="text-area">and</textarea>
      </div>
    );
  };
  const logicTypes2 = () => {
    return (
      <div className="main-content">
        || Or definiton
        <textarea className="text-area">or</textarea>
      </div>
    );
  };
  const logicTypes3 = () => {
    return (
      <div className="main-content">
        ?? Nullish Coalesing definiton
        <textarea className="text-area">null</textarea>
      </div>
    );
  };
  const logicTypes4 = () => {
    return (
      <div className="main-content">
        a ? b : c (Ternary Operator) definiton
        <textarea className="text-area">ternary</textarea>
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
          && And
        </button>
        <div>{selectedButton === "logic1" && logicTypes1()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("logic2")}
        >
          || Or
        </button>
        <div>{selectedButton === "logic2" && logicTypes2()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("logic3")}
        >
          ?? Nullish
        </button>
        <div>{selectedButton === "logic3" && logicTypes3()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("logic4")}
        >
          Ternary Operators
        </button>
        <div>{selectedButton === "logic4" && logicTypes4()}</div>
      </div>
    </div>
  )
}

export default LogicalOperators