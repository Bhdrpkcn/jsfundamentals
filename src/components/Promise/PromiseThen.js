import React, { useState } from "react";

function PromiseThen() {
  const [activeButton, setActiveButton] = useState(null);

  const codeBlock = (content) => {
    return (
      <div>
        <pre className="code-block">
          <code>{content}</code>
        </pre>
      </div>
    );
  };

  const toggleContent = (buttonNumber) => {
    if (activeButton === buttonNumber) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonNumber);
    }
  };

  return (
    <div className="main-content">
      <div>
        <button onClick={() => toggleContent(1)}>1</button>
        {activeButton === 1 && (
          <>
            <p>metin 1</p>
            {codeBlock(`
test1
          `)}
          </>
        )}
      </div>
      <div>
        <button onClick={() => toggleContent(2)}>2</button>
        {activeButton === 2 && (
          <>
            <p>metin 2</p>
            {codeBlock(`
test2
          `)}
          </>
        )}
      </div>
      <div>
        <button onClick={() => toggleContent(3)}>3</button>
        {activeButton === 3 && (
          <>
            <p>metin 3</p>
            {codeBlock(`
test3
test3

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default PromiseThen;
