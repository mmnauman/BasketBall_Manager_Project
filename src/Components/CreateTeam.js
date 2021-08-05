import React, { useReducer, useRef, useContext, useState, useEffect } from "react";
import { Reducer } from "../stateManagement/Reducer";
import { Context } from "./../Store";
import Styled from 'styled-components';
import {Form, Row, Button} from 'react-bootstrap';
import img from './BG2.jpg';
import Loader from "./Loader";


const MainWrapper = Styled.div`

font-family: 'Graduate', cursive;

body{
  background-image: url(${img})!important;
}import Loader from './Loader';




box-sizing: border-box;
width: 1000px;
background: rgab(0,0,0,.5);
margin: 40px auto;
box-shadow: 0px 0px 5px 2px #000;
min-height: 500px;
display: grid;
align-content: center;
color: #fff;

h1{
  font-size: 1.8em;
  background-color: rgba(0,0,0,.9);
  padding: 10px;
}

.formGroup{
  width: 100%;
  text-align: left
}

.select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;

}

label{
  font-size: 1.2em;
  background-color: rgba(0,0,0,.8);
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  background-color: rgba(0,0,0,.5);
  font-size: 2em;
  font-weight: bold;
}

`;





function CreateTeam() {
  const [state, dispatch] = useContext(Context);
  // const [state, dispatch] = useReducer(Reducer, {team:[]});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  const fname = useRef();
  const lname = useRef();
  const age = useRef();
  const position = useRef();
  const id = useRef();

  function AddPlayerHandler(e) {
    e.preventDefault();
    console.log(fname.current.value);
    console.log(lname.current.value);
    console.log(age.current.value);
    console.log(position.current.value);

    const player = {
      firstName: fname.current.value,
      lastName: lname.current.value,
      age: age.current.value,
      position: position.current.value,
      id,
    };

    dispatch({
      type: "ADD_PLAYER",
      payload: player,
    });
  }

  return ( 

    isLoaded === false ? <Loader/> : 

    <MainWrapper>
      <h1>CREATE A PLAYER</h1>
      <Form onSubmit={(e) => AddPlayerHandler(e)}>
        <Row>
        <Form.Group className="formGroup" controlId="formGroupEmail">
          <Form.Label htmlFor="fName">First Name</Form.Label>
          <Form.Control
            id="fName"
            ref={fname}
            required
            type="text"
            className="control"
            placeholder="First Name"
          />
        </Form.Group>
        </Row>
        <Form.Group className="formGroup">
          <Form.Label htmlFor="lName">Last Name</Form.Label>
          <Form.Control
            id='lName'
            ref={lname}
            required
            type="text"
            className="control"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Label htmlFor="Age">Age </Form.Label>
          <Form.Control
            id='Age'
            ref={age}
            min="1.0"
            required
            type="number"
            className="control"
            placeholder="Height"
          />
        </Form.Group>
        <div className="formGroup">
          <label htmlFor="SelectPosition">Select Position</label>
          <Form.Select ref={position} required={true} name="SelectPosition" id="SelectPosition" className="selectBox">
            <option value="Point Guard (PG)">Point Guard (PG)</option>
            <option value="Shooting Guard (SG)">Shooting Guard (SG)</option>
            <option value="Small Forward (SF)">Small Forward (SF)</option>
            <option value="Power Forward (PF)">Power Forward (PF)</option>
            <option value="Center (C)">Center (C)</option>
          </Form.Select>
        </div>
        <input ref={id} type="hidden" id={state.team.length + 1} />
        <div className="d-grid gap-2">
        <Button type='submit' size="lg" className='mt-3' variant="dark">CREATE PLAYER</Button>
        </div>
      </Form>
    </MainWrapper>
  );
}

export default CreateTeam;
