import React, { useState } from "react";
import PromiseThen from "./PromiseThen";
import PromiseFinally from "./PromiseFinally";
import PromiseAsyncAwait from "./PromiseAsyncAwait";

function Promise() {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  return (
    <div className="body">
      <div className="sidebar">
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("promiseThen")}
          >
            Promise.Then()
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("promiseFinally")}
          >
            Promise.finally()
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("promiseAsyncAwait")}
          >
            async/await syntax
          </button>
        </div>
      </div>

      {selectedButton === "promiseThen" && <PromiseThen />}
      {selectedButton === "promiseFinally" && <PromiseFinally />}
      {selectedButton === "promiseAsyncAwait" && <PromiseAsyncAwait />}
    </div>
  );
}

export default Promise;
