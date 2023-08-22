import React, { useState } from "react";

function Promise() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  const codeBlock = (content) => {
    return (
      <div>
        <pre className="code-block">
          <code>{content}</code>
        </pre>
      </div>
    );
  };

  const promiseTypes1 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Promise.Then() definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Promise.Then() definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const promiseTypes2 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Promise.finally() definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Promise.finally() definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };
  
  const promiseTypes3 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for async/await syntax definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for async/await syntax definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  return (
    <div className="body">
      <div className="sidebar">
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("promise1")}
          >
            Promise.Then()
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("promise2")}
          >
            Promise.finally()
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("promise3")}
          >
            async/await syntax
          </button>
        </div>
      </div>
      <div>
        <div>{selectedButton === "promise1" && promiseTypes1()}</div>
        <div>{selectedButton === "promise2" && promiseTypes2()}</div>
        <div>{selectedButton === "promise3" && promiseTypes3()}</div>
      </div>
    </div>
  );
}

export default Promise;
