import React from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("delete");
  const abort = () => console.log("rejection");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
