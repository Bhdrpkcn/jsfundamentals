import React, { useState } from "react";

function Promise() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const promiseTypes1 = () => {
    return (
      <div className="main-content">
        Promise.then() definition
        <textarea className="text-area">.then()</textarea>
      </div>
    );
  };
  const promiseTypes2 = () => {
    return (
      <div className="main-content">
        Promise.finally() definition
        <textarea className="text-area">.finally()</textarea>
      </div>
    );
  };
  const promiseTypes3 = () => {
    return (
      <div className="main-content">
        async/await Syntax Definition
        <textarea className="text-area">async/await</textarea>
      </div>
    );
  };

  return (
    <div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("promise1")}
        >
          Promise.Then()
        </button>
        <div>{selectedButton === "promise1" && promiseTypes1()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("promise2")}
        >
          Promise.finally()
        </button>
        <div>{selectedButton === "promise2" && promiseTypes2()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("promise3")}
        >
          async/await syntax
        </button>
        <div>{selectedButton === "promise3" && promiseTypes3()}</div>
      </div>
    </div>
  )
}

export default Promise