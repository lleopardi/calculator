import "./Numbers.css";
import React from "react";
import Key from "../key/Key";

const Numbers = ({ keys, handlerKeys }) => (
  <div className="numbers">
    {keys.map((key, i) => (
      <Key
        key={key}
        highlight={`${i === keys.length - 1 && "last-key"}`}
        onPress={() => handlerKeys(key)}
      >
        {key}
      </Key>
    ))}
  </div>
);

export default Numbers;
