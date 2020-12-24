import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
