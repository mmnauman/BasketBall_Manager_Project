import React, { useContext, useState } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";

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
  let arrayOfElements = [];
  console.log(arrayOfElements);

  function changeHandler5(e) {
    console.log(e.target.value);
    let filtered = team.filter((el, i) => {
      console.log(el.id, e.target.value);
      return el.id !== Number(e.target.value);
    });
    arrayOfElements.push(filtered);
  }

  return (
    <TeamsContainerStyled>
      {team.length >= 1 &&
        team.slice(0, 5).map(({ firstName, lastName, position }, i) => {
          return (
            <div key={i} className="select">
              <div className="PlayerName">
                <input list="data" value={firstName + lastName} />
                <datalist id="data">
                  {team.map((el) => {
                    return <option value={el.firstName + el.lastName} />;
                  })}
                </datalist>
              </div>

              <div className="PlayerPosition">
                <input list="data1" type="text" value={position} />
                <datalist id="data1">
                  {team.map((el) => {
                    return <option value={el.position} />;
                  })}
                </datalist>
              </div>
            </div>
          );
        })}
    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
