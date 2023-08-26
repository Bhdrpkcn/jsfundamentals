import React, { useState } from "react";
import "./App.css";
import This from "./components/This/This";
import PromiseComponent from "./components/Promise/Promise";
import LogicalOperators from "./components/LogicalOp/LogicalOperators";
import Functions from "./components/Functions/Functions";
import DataTypes from "./components/DataTypes/DataTypes"
import Background from "./Background";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  return (
    <div className="App">
      <button className="main-btn" onClick={() => handleButtonClick("App")}>
        Js Fundamentals
      </button>
      <div className="sec-btn">
        <button
          className="animated-btn"
          onClick={() => handleButtonClick("dataTypes")}
        >
          Data Types
        </button>
        <button
          className="animated-btn"
          onClick={() => handleButtonClick("logicalOperators")}
        >
          Logical Operators
        </button>
        <button
          className="animated-btn"
          onClick={() => handleButtonClick("functions")}
        >
          Functions
        </button>
        <button
          className="animated-btn"
          onClick={() => handleButtonClick("this")}
        >
          This
        </button>
        <button
          className="animated-btn"
          onClick={() => handleButtonClick("promise")}
        >
          Promise
        </button>
      </div>
      {selectedButton === "this" && <This />}
      {selectedButton === "promise" && <PromiseComponent />}
      {selectedButton === "logicalOperators" && <LogicalOperators />}
      {selectedButton === "functions" && <Functions />}
      {selectedButton === "dataTypes" && <DataTypes />}
      <Background />
    </div>
  );
}

export default App;
