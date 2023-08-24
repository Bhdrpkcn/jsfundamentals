import React, { useState } from "react";

function FunctionTypesValue() {
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
        <button className="fourth-btn" onClick={() => toggleContent(1)}>
          Returning a Value
        </button>
        {activeButton === 1 && (
          <>
            <p>metin 1</p>
            {codeBlock(`
test1
          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default FunctionTypesValue;
