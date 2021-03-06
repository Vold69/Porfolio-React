import React from "react";
import ReactDOM from "react-dom";
import "./Index.scss";
import App from "./App";
import { AppProvider } from "./Context/AppContext";
import reportWebVitals from "./reportWebVitals";
import { init } from "@emailjs/browser";
init("user_a7Y2EsYnydCGWgrqhjDdR");

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If  you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
