import React from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log(title);
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("can i steal your kimchi?");
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
