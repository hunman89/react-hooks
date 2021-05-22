import React from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevet = () => window.addEventListener("beforeunload", listener);
  const disablePrevet = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevet, disablePrevet };
};

const App = () => {
  const { enablePrevet, disablePrevet } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevet}>protect</button>
      <button onClick={disablePrevet}>unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
