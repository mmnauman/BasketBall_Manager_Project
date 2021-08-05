import "./App.css";
import { NavLink } from "react-router-dom";
import Nav from "./Components/Nav";
import React, { useState, useReducer, useRef } from "react";
import { Reducer } from "./stateManagement/Reducer";
import { Route } from "react-router-dom";
import CreateTeam from "./Components/CreateTeam";
import Store from "./Store";
import FirstQuarter from "./Components/FirstQuarter2";
import Styled from 'styled-components';


const MainStyled = Styled.div`
h1{
  color: #fff;
  margin-top: 50px;
  font-family: 'Graduate', cursive;
  background-color: rgba(0,0,0,.8);
  padding: 10px;
}

`;




function App() {
  return (
    <Store>
      <Nav />
      <div className="App">
      <Route exact path="/">
        <MainStyled>
        <h1>Basket Ball Manager</h1>

        </MainStyled>
       
        </Route>

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
