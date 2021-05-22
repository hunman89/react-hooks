import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  if (typeof duration != "number" || typeof delay != "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(2, 1);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>lorem ipsum djfdiasjfieownefk</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
