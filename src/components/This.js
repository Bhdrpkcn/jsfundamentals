import React, { useState } from "react";

function This() {
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

  //-------
  const thisTypes1 = () => {
    return (
      <div className="main-content">
        <h2>This Definition</h2>
        <p>Here is the text for What is This Keyword definition and usage.</p>
        {codeBlock(`
here is this example
        `)}

        <h2>This Definition</h2>
        <p>Here is the text for What is This Keyword definition and usage.</p>
        {codeBlock(`
here is this example
        `)}

        <h2>This Definition</h2>
        <p>Here is the text for What is This Keyword definition and usage.</p>
        {codeBlock(`
here is this example
        `)}
      </div>
    );
  };
  //-------

  const thisTypes2 = () => {
    return (
      <div className="main-content">
        <h2>{} and Context in JS Definition</h2>
        <p>Here is the text for What is {} and Context in JS definition and usage.</p>
        {codeBlock(`
here is this example
        `)}

        <h2>This Definition</h2>
        <p>Here is the text for What is {} and Context in JS definition and usage.</p>
        {codeBlock(`
here is this example
        `)}

        <h2>This Definition</h2>
        <p>Here is the text for What is {} and Context in JS definition and usage.</p>
        {codeBlock(`
here is this example
        `)}
      </div>
    );
  };


  const thisTypes3 = () => {
    return (
      <div className="main-content">
        <h2>This Function in Normal and Arrow Functions Definition</h2>
        <p>Here is the text for What is This Function in Normal and Arrow Functions definition and usage.</p>
        {codeBlock(`
here is this example
        `)}

        <h2>This Definition</h2>
        <p>Here is the text for What is This Function in Normal and Arrow Functions definition and usage.</p>
        {codeBlock(`
here is this example
        `)}

        <h2>This Definition</h2>
        <p>Here is the text for What is This Function in Normal and Arrow Functions definition and usage.</p>
        {codeBlock(`
here is this example
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
            onClick={() => handleButtonClick("this1")}
          >
            What is This Keyword
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("this2")}
          >
            {} and Context in Js
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("this3")}
          >
            This Funciton in Normal and Arrow Functions
          </button>
        </div>
      </div>
      <div>
        <div>{selectedButton === "this1" && thisTypes1()}</div>
        <div>{selectedButton === "this2" && thisTypes2()}</div>
        <div>{selectedButton === "this3" && thisTypes3()}</div>
      </div>
    </div>
  );
}

export default This;
