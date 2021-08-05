import React, { useContext, useState } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";

<<<<<<< HEAD
function FirstQuarter() {

const [state, dispatch] = useContext(Context);

console.log(state.team);
=======
const TeamsContainerStyled = Styled.div`
>>>>>>> 1abf9cb821f7927f8e47880e13208603775f6910

.select{
    display: flex;
    justify-content: center;
    align-items: center;
}

<<<<<<< HEAD
return (
<div>
    <select name="" id="">
        {state.team.map((player, i) => {
        return(
        <div key={i}>
            <select name="" id="">
                <option value={player.firstName}>{player.firstName} {player.lastName}</option>
            </select>

            <select name="" id="">
                <option value={player.position}>{player.position}</option>
            </select>
        </div>
        )
        })}

    </select>
</div>
)
=======

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
>>>>>>> 1abf9cb821f7927f8e47880e13208603775f6910
}

export default FirstQuarter;
