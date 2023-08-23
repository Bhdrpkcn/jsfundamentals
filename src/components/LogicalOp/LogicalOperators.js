import React, { useState } from "react";
import LogicAnd from "./LogicAnd"
import LogicOr from "./LogicOr"
import LogicNull from "./LogicNull"
import LogicTernary from "./LogicTernary"
function LogicalOperators() {
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
            onClick={() => handleButtonClick("logicAnd")}
          >
            && And
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("logicOr")}
          >
            || Or
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("logicNull")}
          >
            ?? Nullish
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("logicTernary")}
          >
            Ternary Operators
          </button>
        </div>
      </div>
        {selectedButton === "logicAnd" && <LogicAnd />}
        {selectedButton === "logicOr" && <LogicOr />}
        {selectedButton === "logicNull" && <LogicNull />}
        {selectedButton === "logicTernary" && <LogicTernary />}
    </div>
  );
}

export default LogicalOperators;
