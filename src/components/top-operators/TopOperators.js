import React from "react";
import "./TopOperators.css";
import Key from "../key/Key";

export default function TopOperators({ keys, handlerKeys }) {
  return (
    <div className="top-operators">
      {keys.map((key, i) => (
        <Key
          key={key}
          highlight={`operator-key ${i === 0 && "warning"}`}
          onPress={() => handlerKeys(key)}
        >
          {key}
        </Key>
      ))}
    </div>
  );
}
