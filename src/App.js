import React from "react";
import { UserProvider } from "./context/UserContext";
import Router from "./Router";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
};

export default App;
