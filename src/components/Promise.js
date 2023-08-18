import React, { useState } from "react";

function Promise() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const promiseTypes = () => {
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
          onClick={() => handleButtonClick("promise1")}
        >
          change promise1
        </button>
        <div>{selectedButton === "promise1" && promiseTypes()}</div>
      </div>
      <div className="thrd-btn">
        <button
          className="thrd-animated-btn"
          onClick={() => handleButtonClick("promise2")}
        >
          change promise 2
        </button>
        <div>{selectedButton === "promise2" && promiseTypes()}</div>
      </div>
    </div>
  )
}

export default Promise