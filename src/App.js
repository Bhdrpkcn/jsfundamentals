import React, { useState } from "react";
import "./App.css";
import This from "./components/This";
import PromiseComponent from "./components/Promise";
import LogicalOperators from "./components/LogicalOperators";
import Functions from "./components/Functions";
import DataTypes from "./components/DataTypes";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  return (
    <div className="App">
      <div className="Home">
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
        <div>
          {selectedButton === "this" && <This />}
          {selectedButton === "promise" && <PromiseComponent />}
          {selectedButton === "logicalOperators" && <LogicalOperators />}
          {selectedButton === "functions" && <Functions />}
          {selectedButton === "dataTypes" && <DataTypes />}
        </div>
      </div>
    </div>
  );
}

export default App;
