import React, { useState } from "react";

function Functions() {
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

  const functionTypes1 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Returning a Value definition and usage.</p>
        {codeBlock(`
Function example 1
 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Returning a Value definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const functionTypes2 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text Parameters for definition and usage.</p>
        {codeBlock(`
Function example 1 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Parameters definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };
  const functionTypes3 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Default Parameters definition and usage.</p>
        {codeBlock(`
Function example 1 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Default Parameters definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const functionTypes4 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for definition and usage.</p>
        {codeBlock(`
Function example 1 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for definition and usage.</p>
        {codeBlock(`
Function example 2
        `)}
      </div>
    );
  };

  const functionTypes5 = () => {
    return (
      <div className="main-content">
        <h2>Definition</h2>
        <p>Here is the text for Inner-Outer Variables definition and usage.</p>
        {codeBlock(`
Function example 1 
        `)}

        <h2>Definition</h2>
        <p>Here is the text for Var-Let-Const / Behaviors in Funcitons definition and usage.</p>
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
            onClick={() => handleButtonClick("function1")}
          >
            Returning a Value
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("function2")}
          >
            Parameters
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("function3")}
          >
            Default Parameters
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("function4")}
          >
            Inner-Outer Variables
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("function5")}
          >
            Var-Let-Const / Behaviors in Funcitons
          </button>
        </div>
      </div>
      <div>
        <div>{selectedButton === "function1" && functionTypes1()}</div>
        <div>{selectedButton === "function2" && functionTypes2()}</div>
        <div>{selectedButton === "function3" && functionTypes3()}</div>
        <div>{selectedButton === "function4" && functionTypes4()}</div>
        <div>{selectedButton === "function5" && functionTypes5()}</div>
      </div>
    </div>
  );
}

export default Functions;
