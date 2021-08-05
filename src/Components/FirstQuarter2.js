import React, { useContext, useState, useCallback } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";

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

const states = [];

function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");

  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  console.log(team, state1, state2);

  function changeHandler1(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      console.log("hahaha");
    } else {
      console.log("error");
    }
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
    }
    console.log(evnt);
  }

  function changeHandler3(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState3(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler4(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState4(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler5(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setState5(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  return (
    <TeamsContainerStyled>
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
            onChange={changeHandler1}
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
            onChange={changeHandler2}
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
            onChange={changeHandler3}
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
            onChange={changeHandler4}
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
            onChange={changeHandler5}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>
    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
