import "./App.css";
import { NavLink } from "react-router-dom";
import Nav from "./Components/Nav";
import React, { useState, useReducer, useRef } from "react";
import { Reducer } from "./stateManagement/Reducer";
import { Route } from "react-router-dom";
import CreateTeam from "./Components/CreateTeam";
import Store from "./Store";
import FirstQuarter from "./Components/FirstQuarter2";
import Test from "./Components/test1";

function App() {
  return (
    <Store>
      <Nav />
      <h1>Basket Ball Manager</h1>
      <div className="App">
        <Route path="/create">
          <CreateTeam />
        </Route>
        <Route path="/event">
          <FirstQuarter />
          {/* <Test /> */}
        </Route>
      </div>
    </Store>
  );
}

export default App;
