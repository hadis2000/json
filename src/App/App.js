import React, { useContext } from "react";
import AuthenticatedApp from "./AuthenticatedApp/AuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp/UnAuthenticatedApp";

import { IsLogged } from "../core/servises/context/IsLogged";
import "./App.css";

function App() {
  const isLogged = useContext(IsLogged);
  return isLogged.currentLog ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App;
