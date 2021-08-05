import React, { useContext, useState, useCallback } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";
import { useMemo } from "react";
import { useRef } from "react";

const TeamsContainerStyled = Styled.div`

.select{
    display: flex;
    justify-content: center;
    align-items: center;
}


`;

function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  const sel1 = useRef();
  const sel2 = useRef();
  const sel3 = useRef();
  const sel4 = useRef();
  const sel5 = useRef();

  console.log(team, state1, state2);

  function changeHandler(evnt) {
    // for (let i = 1; i < team.length; i++) {
    //   // if (team[i].includes(state1)) {
    //   //   console.log(team, state1);
    //   // }
    //   if (team.indexOf(state2) !== -1) {
    //     console.log(team[i], team, state1);
    //   }
    // }
    // let foundElement = team.find((el) => {
    //   console.log(el, state1);
    //   return el.id === state1;
    // });
    // let foundElement = team.filter((el) => {
    //   console.log(el, state1);
    //   return el.id !== state1;
    // });
    // setTeam(foundElement);
    // console.log(foundElement);
    // dispatch({
    //   type: "UPDATE_ARRAY_REUEST",
    //   payload: e.target.options.selectedIndex + 1,
    // });

    const ArrayOfElements = [state1, state2, state3, state4, state5];
    console.log(ArrayOfElements);
  }

  return (
    <TeamsContainerStyled>
      <div className="selectBox select">
        <div className="PlayerName">
          <select
            ref={sel1}
            name="selector1"
            id="selector1"
            onChange={(e) => {
              changeHandler();
              // dispatch({
              //   type: "UPDATE_ARRAY_REUEST",
              //   payload: e.target.options.selectedIndex + 1,
              // });
              //console.log(e.target.options.selectedIndex + 1);
              setState1(() => {
                return e.target.options.selectedIndex + 1;
              });
            }}
            value={state1}
          >
            {team.map((player, i) => {
              return (
                <option key={i} value={player.id}>
                  {player.firstName} {player.lastName}
                </option>
              );
            })}
            <option value=""></option>
          </select>
        </div>
        <div className="PlayerRole"></div>
      </div>
      {/* End */}
      <div className="selectBox select">
        <div className="PlayerName">
          <select
            ref={sel2}
            name="selector1"
            id="selector1"
            onChange={(e) => {
              setState2(e.target.value);
              changeHandler();
            }}
            value={state2}
          >
            {team.map((player) => {
              return (
                <option value={player.id}>
                  {player.firstName} {player.lastName}
                </option>
              );
            })}
            <option value=""></option>
          </select>
        </div>
        <div className="PlayerRole"></div>
      </div>
      {/* End */}
    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
