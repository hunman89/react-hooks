import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof vaildator === "function") {
      willUpdate = vaildator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
