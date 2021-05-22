import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  });
  if (typeof onBefore != "function") {
    return;
  }
};

const App = () => {
  const begForLife = () => {
    console.log("please don't leave");
  };
  useBeforeLeave(begForLife);
  return <div className="App"></div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
