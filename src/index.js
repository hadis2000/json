import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/fonts/Estedad-Medium.ttf";
import "./assets/fonts/Lalezar-Regular.ttf";

import "./index.css";
import LoggeddInCheckedProvider from "./core/servises/context/IsLogged";

import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import CartContext from "./core/servises/context/CartContext/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoggeddInCheckedProvider>
    <CartContext>
      <App />
    </CartContext>
  </LoggeddInCheckedProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
