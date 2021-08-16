import React from "react";
import "./RightOperators.css";
import Key from "../key/Key";

export default function RightOperators({ keys, handlerKeys }) {
  return (
    <div className="right-operators">
      {keys.map((key, i) => (
        <Key
          key={key}
          highlight={`${key === "=" && "key-equal"}`}
          onPress={() => handlerKeys(key)}
        >
          {key}
        </Key>
      ))}
    </div>
  );
}
