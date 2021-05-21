import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    const cur = element.current;
    if (cur) {
      cur.addEventListener("click", onClick);
    }
    return () => {
      if (cur) {
        cur.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return element;
};

const App = () => {
  const sayHello = () => console.log("hello");

  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
