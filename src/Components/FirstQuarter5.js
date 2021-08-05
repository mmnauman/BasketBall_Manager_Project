import React, { useContext, useState, useCallback, useEffect } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";
import ErrorComp from "./Error";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "./Loader";
import { Button } from 'react-bootstrap';
import { useMemo } from "react";

const TeamsContainerStyled = Styled.div`
font-family: 'Graduate', cursive;
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
const selectedStates = [];
function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [team1, setTeam1] = useState(state.team);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [ErrorContent, setErrorContent] = useState("");
  const [ShowError, setShowError] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [showSubmitBtn, setSubmitBtn] = useState(false);

  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");


  useEffect(() => {
    setLoaded(true);
    console.log(states.length)
    console.log(selectedStates.length)
    states.length === 5 && selectedStates.length === 5 ? setSubmitBtn(true) : setSubmitBtn(false);
  }, [changeHandler1, changeHandler2, changeHandler3, changeHandler4, changeHandler5, SelectHandler1, SelectHandler2, SelectHandler3, SelectHandler4, SelectHandler5])



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
      setErrorContent(` You have already selected this Player ${evnt.firstName} ${evnt.lastName}. You cannot select same player Again `)
      setShowError(true);
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
      setErrorContent(` You have already selected this Player ${evnt.firstName} ${evnt.lastName}. You cannot select same player Again `)
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
      setErrorContent(` You have already selected this Player ${evnt.firstName} ${evnt.lastName}. You cannot select same player Again `)
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
      setErrorContent(` You have already selected this Player ${evnt.firstName} ${evnt.lastName}. You cannot select same player Again `)
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
      setErrorContent(` You have already selected this Player${evnt.firstName} ${evnt.lastName}. You cannot select same player Again `)
      setShowError(true)
    }
    console.log(evnt);
  }

  // End Change Start Select
  
  function SelectHandler1(evnt) {
    if (!selectedStates.includes(evnt)) {
      evnt.disabled = true;
      selectedStates.push(evnt);
      console.log(evnt);
    } else {
      console.log("error");
      evnt.disabled = false;
      setErrorContent(`You Have Already Selected This Position ${evnt.position}. You Cannot Select Same Position Again `)
      setShowError(true);
    }
    console.log(evnt);

    // setState1(`${evnt.firstName} ${evnt.lastName}`);
    // console.log(states);
  }

  function SelectHandler2(evnt) {
    if (!selectedStates.includes(evnt)) {
      evnt.disabled = true;
      selectedStates.push(evnt);
      setState2(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      evnt.disabled = false;
      console.log("error");
      setErrorContent(`You Have Already Selected This Position ${evnt.position}. You Cannot Select Same Position Again `)
      setShowError(true)
    }
    console.log(evnt);
  }

  function SelectHandler3(evnt) {
    if (!selectedStates.includes(evnt)) {
      selectedStates.push(evnt);
      evnt.disabled = true;
      //setState3(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      evnt.disabled = false;
      console.log("error");
      setErrorContent(`You Have Already Selected This Position ${evnt.position}. You Cannot Select Same Position Again `)
      setShowError(true)
    }
    console.log(evnt);
  }

  function SelectHandler4(evnt) {
    if (!selectedStates.includes(evnt)) {
      selectedStates.push(evnt);
      evnt.disabled = true;
      //setState4(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      evnt.disabled = false;
      console.log("error");
      setErrorContent(`You Have Already Selected This Position ${evnt.position}. You Cannot Select Same Position Again `)
      setShowError(true)
    }
    console.log(evnt);
  }

  function SelectHandler5(evnt) {
    if (!selectedStates.includes(evnt)) {
      evnt.disabled = true;
      selectedStates.push(evnt);
      //setState5(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      evnt.disabled = false;
      console.log("error");
      setErrorContent(`You Have Already Selected This Position ${evnt.position}. You Cannot Select Same Position Again `)
      setShowError(true)
    }
    console.log(evnt);
  }

  return (

    isLoaded === false ? <Loader/> : 

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
            // getOptionSelected={state1}
          />
        </div>

        <div className="PlayerPosition">
          <Select
            className="selectBox"
            // options={
            //   selectedStates.length > 0
            //     ? [...new Set(team1.filter((el, i) => {
            //         return el !== selectedStates[i];
            //       }))]
            //     : team1.slice(0,5)
            // }
            options={team1}
            onChange={SelectHandler1}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
            isOptionDisabled={(option) => option.disabled}
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
            // options={
            //   selectedStates.length > 0
            //     ? [...new Set(team1.filter((el, i) => {
            //         return el !== selectedStates[i];
            //       }))]
            //     : team1.slice(0,5)
            // }
            options={team1}
            isOptionDisabled={(option) => option.disabled}
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
            // options={
            //   selectedStates.length > 0
            //     ? [...new Set(team1.filter((el, i) => {
            //         return el !== selectedStates[i];
            //       }))]
            //     : team1.slice(0,5)
            // }
            options={team1}
            isOptionDisabled={(option) => option.disabled}
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
            // options={
            //   states.length > 0
            //     ? team.filter((el, i) => el !== states[i])
            //     : team
            // }
            isOptionDisabled={(option) => option.disabled}
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
            // options={
            //   selectedStates.length > 0
            //     ? [...new Set(team1.filter((el, i) => {
            //         return el !== selectedStates[i];
            //       }))]
            //     : team1.slice(0,5)
            // }
            options={team1}
            isOptionDisabled={(option) => option.disabled}
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
            // options={
            //   selectedStates.length > 0
            //     ? [...new Set(team1.filter((el, i) => {
            //         return el !== selectedStates[i];
            //       }))]
            //     : team1.slice(0,5)
            // }
            options={team1}
            isOptionDisabled={(option) => option.disabled}
            onChange={SelectHandler5}
            getOptionLabel={(opt) => {
              return `${opt.position}`;
            }}
            getOptionValue={(opt) => opt.id}
          />
        </div>
      </div>

            {showSubmitBtn ? 
      <Button variant='dark'>SAVE PLAYERS FOR QUARTERS</Button>  
      : 
      <Button disabled variant='dark'>SAVE PLAYERS FOR QUARTERS</Button>     }

      {/* {ShowError && <ErrorComp closeHandler={closeHandler}>You have already selected this Player. You cannot select same player Again</ErrorComp>} */}
     
      {
      ShowError && <ErrorComp closeHandler={closeHandler}>{ErrorContent}</ErrorComp>}

      {/* You have already selected this Player. You cannot select same player Again */}

    {ShowError && setTimeout(() => {setShowError(false)}, 4000)}

    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
