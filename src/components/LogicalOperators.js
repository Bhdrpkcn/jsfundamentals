import React, { useState } from "react";

function LogicalOperators() {
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

  const logicTypes1 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for && And definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for && And definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const logicTypes2 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Or definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Or definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const logicTypes3 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for ?? Nullish definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for ?? Nullish definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const logicTypes4 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Ternary Operators definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Ternary Operators definition and usage.</p>
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
            onClick={() => handleButtonClick("logic1")}
          >
            && And
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("logic2")}
          >
            || Or
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("logic3")}
          >
            ?? Nullish
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("logic4")}
          >
            Ternary Operators
          </button>
        </div>
      </div>
      <div>
        <div>{selectedButton === "logic1" && logicTypes1()}</div>
        <div>{selectedButton === "logic2" && logicTypes2()}</div>
        <div>{selectedButton === "logic3" && logicTypes3()}</div>
        <div>{selectedButton === "logic4" && logicTypes4()}</div>
      </div>
    </div>
  );
}

export default LogicalOperators;
