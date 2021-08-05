import React, { useContext, useState, useCallback } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";
import ErrorComp from "./Error";
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamsContainerStyled = Styled.div`

width: 1000px;
margin: 40px auto;
box-shadow: 0px 0px 5px 2px #000;
display: grid;
align-content: center;

body{
  back
}

.select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;

}

.PlayerName{
  margin: 10px 0px;
}

.selectBox{
    width: 100%;
    min-width: 300px;
}

.SelectHeading{
  color: #FFF;
  margin-bottom 40px;
  padding: 10px;
  background-color: rgba(0,0,0,.8);
  font-size:1.8em;
  font-weight: bold;
  font-family: 'Graduate', cursive;
}


`;

const states = [];
function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [ShowError, setShowError] = useState(false);


  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  console.log(team, state1, state2);


function closeHandler(){
  setShowError(false)
}


  function changeHandler1(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      console.log("hahaha");
    } else {
      console.log("error"); 
    console.log(evnt);

    setState1(`${evnt.firstName} ${evnt.lastName}`);
    console.log(states);
  }

  function changeHandler2(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState2(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
      setShowError(true)
    }
    console.log(evnt);
  }

  function changeHandler3(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState3(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
      setShowError(true)
    }
    console.log(evnt);
  }

  function changeHandler4(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState4(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
      setShowError(true)
    }
    console.log(evnt);
  }

  function changeHandler5(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState5(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
      setShowError(true)
    }
    console.log(evnt);
  }

  return (
    <TeamsContainerStyled>

<h1 className='SelectHeading'>Select 5 Players To Play in Quarter's & Assign A Role</h1>

      <div className="select">
        <div className="PlayerName">
          <Select
            className="selectBox"
            options={
              states.length > 0
                ? team.filter((el, i) => el !== states[i])
                : team
            }
            onChange={changeHandler1}
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
            options={
              states.length > 0
                ? team.filter((el, i) => {
                    console.log(el, states[i]);
                    return el.id !== states[i];
                  })
                : team
            }
            onChange={SelectHandler1}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>

      <div className="select">
        <div className="PlayerName">
          <Select
            className="selectBox"
            options={
              states.length > 0
                ? team.filter((el, i) => el !== states[i])
                : team
            }
            onChange={changeHandler2}
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
            onChange={SelectHandler2}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>

      <div className="select">
        <div className="PlayerName">
          <Select
            className="selectBox"
            options={
              states.length > 0
                ? team.filter((el, i) => el !== states[i])
                : team
            }
            onChange={changeHandler3}
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
            onChange={SelectHandler3}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>

      <div className="select">
        <div className="PlayerName">
          <Select
            className="selectBox"
            options={
              states.length > 0
                ? team.filter((el, i) => el !== states[i])
                : team
            }
            onChange={changeHandler4}
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
            onChange={SelectHandler4}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>

      <div className="select">
        <div className="PlayerName">
          <Select
            className="selectBox"
            options={
              states.length > 0
                ? team.filter((el, i) => el !== states[i])
                : team
            }
            onChange={changeHandler5}
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
            options={
              states.length > 0
                ? team.filter((el, i) => el !== states[i])
                : team
            }
            onChange={SelectHandler5}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>

      {/* {ShowError && <ErrorComp closeHandler={closeHandler}>You have already selected this Player. You cannot select same player Again</ErrorComp>} */}
     
      {
      ShowError && <ErrorComp closeHandler={closeHandler}>You have already selected this Player. You cannot select same player Again</ErrorComp>}

    {ShowError && setTimeout(() => {setShowError(false)}, 3000)}

    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
