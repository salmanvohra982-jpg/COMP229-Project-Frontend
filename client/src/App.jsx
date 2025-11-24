/* 
    File: App.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Root component that initializes React Router and loads MainRouter for page routing.
    Date: November 23 2025


import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;*/


import React from "react";
import MainRouter from "./MainRouter";

function App(){
  return <MainRouter />;
}

export default App;