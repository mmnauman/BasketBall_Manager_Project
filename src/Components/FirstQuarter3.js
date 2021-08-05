import React, { useContext, useState, useCallback } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";
import ErrorComp from "./Error";

const TeamsContainerStyled = Styled.div`

.select{
    display: flex;
    justify-content: center;
    align-items: center;
}

.selectBox{
    width: 200px;
}


`;

function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [ShowError, setShowError] = useState(false);
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  console.log(team, state1, state2);

  function changeHandler1(evnt) {
    console.log(evnt);
    setState1(`${evnt.firstName} ${evnt.lastName}`);
  }

  //   function changeHandler(evnt) {
  //     console.log(evnt);
  //     setState1(`${evnt.firstName} ${evnt.lastName}`);
  //   }

  return (
    <TeamsContainerStyled>
      {team.length >= 1 &&
        team.slice(0, 5).map(({ firstName, lastName, position }, i) => {
          return (
            <div key={i} className="select">
              <div className="PlayerName">
                <Select
                  className="selectBox"
                  options={team}
                  onChange={changeHandler}
                  getOptionLabel={(opt) => {
                    return `${opt.firstName} ${opt.lastName}`;
                  }}
                  getOptionValue={(opt) => opt.id}
                  //getOptionSelected={state1}
                />
              </div>

              <div className="PlayerPosition">
                <Select
                  className="selectBox"
                  options={team}
                  onChange={changeHandler}
                  getOptionLabel={(opt) => {
                    return `${opt.position}`;
                  }}
                  getOptionValue={(opt) => opt.id}
                />
              </div>
            </div>
          );
        })}

{ShowError && <ErrorComp>You have already selected this Player. You cannot select same player Again</ErrorComp>}
        
    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
