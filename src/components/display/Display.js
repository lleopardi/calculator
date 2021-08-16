import React from "react";
import "./Display.css";

export default function Display({
  firstValue,
  operator,
  
  currentValue,
  result,
  history,
}) {
  return (
    <div className="display">
      <div className="title">Calculator Innocv</div>
      <div className="history" >{history.map((data, i) => <div key={i}>{data}</div> )}</div>
      <div className="operators">
        
        {firstValue} {operator}
      </div>
      <div className="currentValue">{currentValue}</div>
      <div className="result">{result}</div>
    </div>
  );
}
