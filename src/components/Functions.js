import React, { useState } from "react";

function Functions() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const functionTypes1 = () => {
    return (
      <div className="main-content">
        Returning a Value Definition
        <textarea className="text-area">Returning Value</textarea>
      </div>
    );
  };
  const functionTypes2 = () => {
    return (
      <div className="main-content">
        Parameters definition
        <textarea className="text-area">Parameters</textarea>
      </div>
    );
  };

  const functionTypes3 = () => {
    return (
      <div className="main-content">
        Default Parameters Definition
        <textarea className="text-area">Default Parameters</textarea>
      </div>
    );
  };

  const functionTypes4 = () => {
    return (
      <div className="main-content">
        Inner-Outer Definition
        <textarea className="text-area">Inner Outer Variables</textarea>
      </div>
    );
  };

  const functionTypes5 = () => {
    return (
      <div className="main-content">
        Var Let Const Definiton
        <textarea className="text-area">Var Let Const</textarea>
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
          Returning a Value
        </button>
        <div>{selectedButton === "function1" && functionTypes1()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("function2")}
        >
          Parameters
        </button>
        <div>{selectedButton === "function2" && functionTypes2()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("function3")}
        >
          Default Parameters
        </button>
        <div>{selectedButton === "function3" && functionTypes3()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("function4")}
        >
          Inner-Outer Variables
        </button>
        <div>{selectedButton === "function4" && functionTypes4()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("function5")}
        >
          Var-Let-Const / Behaviors in Funcitons
        </button>
        <div>{selectedButton === "function5" && functionTypes5()}</div>
      </div>
    </div>
  );
}

export default Functions;
