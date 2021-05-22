import React, { useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = () => {
  const element = useRef();
  console.log(element);
  const triggerFull = () => {
    if (element.current) {
      console.log(element.current);
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape"></img>
        <button onClick={triggerFull}>full screen</button>

        <button onClick={exitFull}>exit full screen</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
