import { useState } from "react";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Display from "./components/display/Display";
import Keyboard from "./components/keyboard/Keyboard";
import Numbers from "./components/numbers/Numbers";
import RightOperators from "./components/right-operators/RightOperators";
import TopOperators from "./components/top-operators/TopOperators";
import operations from "./utils/ArithmeticOperations";

let arithmeticOperation;

const keys = {
  top: ["C", "DEL", "%"],
  right: ["/", "*", "+", "-", "="],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"],
};

function App() {
  const [result, setResult] = useState(0);
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState();
  const [firstValue, setFirstValue] = useState();
  const [historical, setHistorical] = useState([]);

  //TODO: sorry, refactor this function with design pattern
  const readNumbers = (value) => {
    if (value === ".") {
      if (currentValue.includes(".")) {
        return;
      }

      if (currentValue === "") {
        setCurrentValue(`0${value}`);
        return;
      }
    }
    if (currentValue === "0" && value==="0") {
      setCurrentValue(`${value}`);
      return;
    }
    setCurrentValue(`${currentValue}${value}`);
  };

  //TODO: sorry, refactor this function with design pattern
  const setMethod = (key) => {
    if (key === "C") {
      reset();
      return;
    }

    if (key === "DEL") {
      const lengthInput = currentValue.length;
      if (lengthInput) {
        const newValue = currentValue.slice(0, lengthInput - 1);
        setCurrentValue(newValue);
      }
      return;
    }

    if (key === "=") {
      if (firstValue && currentValue) {
        const calculatedValue = arithmeticOperation(+firstValue, +currentValue);
        const history = `${firstValue} ${operator} ${currentValue} = ${calculatedValue}`;
        setResult(calculatedValue);
        setCurrentValue("");
        setFirstValue("");
        setOperator("");
        const newHistory = [...historical, history].slice(-4);
        setHistorical(newHistory);
        arithmeticOperation = null;
      }
      return;
    }

    if(!currentValue && !firstValue){
      return
    }
    
    setOperator(key);
    arithmeticOperation = operations[key];
    if(currentValue){
      setFirstValue(currentValue);
      setCurrentValue("");
    }
    
  };

  const reset = () => {
    setResult(0);
    setFirstValue("");
    setCurrentValue("");
    setOperator("");
    setHistorical([]);
  };

  return (
    <div className="App">
      <Calculator>
        <Display firstValue={firstValue}
        currentValue={currentValue}
        result={result}
        operator={operator}
        history={historical}
        />
        
        <Keyboard>
          <TopOperators keys={keys.top} handlerKeys={setMethod}/>
          <Numbers keys={keys.numbers} handlerKeys={readNumbers}/>
          <RightOperators keys={keys.right} handlerKeys={setMethod}/>
        </Keyboard>
      </Calculator>
    </div>
  );
}

export default App;
