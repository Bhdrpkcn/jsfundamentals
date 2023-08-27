import React, { useState } from "react";
import FunctionTypesDefParameters from "./FunctionTypesDefParameters";
import FunctionTypesInOutVariables from "./FunctionTypesInOutVariables";
import FunctionTypesParameters from "./FunctionTypesParameters";
import FunctionTypesValue from "./FunctionTypesValue";
import FunctionTypesVarLetConst from "./FunctionTypesVarLetConst";

function Functions() {
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
            onClick={() => handleButtonClick("functionValue")}
          >
            Returning a Value
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("functionParameters")}
          >
            Parameters
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("functionDefParameters")}
          >
            Default Parameters
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("functionInOutVariables")}
          >
            Inner-Outer Variables
          </button>
        </div>
        <div className="thrd-btn">
          <button
            className="thrd-animated-btn"
            onClick={() => handleButtonClick("functionVarLetConst")}
          >
            Var-Let-Const / Behaviors in Funcitons
          </button>
        </div>
      </div>
      {selectedButton === "functionValue" && <FunctionTypesValue />}
      {selectedButton === "functionParameters" && <FunctionTypesParameters />}
      {selectedButton === "functionDefParameters" && (
        <FunctionTypesDefParameters />
      )}
      {selectedButton === "functionInOutVariables" && (
        <FunctionTypesInOutVariables />
      )}
      {selectedButton === "functionVarLetConst" && <FunctionTypesVarLetConst />}
    </div>
  );
}

export default Functions;
