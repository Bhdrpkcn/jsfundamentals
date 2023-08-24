import React, { useState } from "react";

function DataTypesObject() {
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
          Object.values
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
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(2)}>
          Object.entries
        </button>
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
        <button className="fourth-btn" onClick={() => toggleContent(3)}>
          Object.keys
        </button>
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
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(4)}>
          ...(Destructuring Assigment)
        </button>
        {activeButton === 4 && (
          <>
            <p>metin 3</p>
            {codeBlock(`
    test3
    test3

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(5)}>
          JSON.parse
        </button>
        {activeButton === 5 && (
          <>
            <p>metin 3</p>
            {codeBlock(`
    test3
    test3

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(6)}>
          JSON.stringfy
        </button>
        {activeButton === 6 && (
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

export default DataTypesObject;
