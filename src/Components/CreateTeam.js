import React, { useReducer, useRef, useContext } from "react";
import { Reducer } from "../stateManagement/Reducer";
import { Context } from "./../Store";

function CreateTeam() {
  const [state, dispatch] = useContext(Context);
  // const [state, dispatch] = useReducer(Reducer, {team:[]});

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
    <div>
      <form onSubmit={(e) => AddPlayerHandler(e)} action="">
        <div className="formGroup">
          <input
            ref={fname}
            required
            type="text"
            className="control"
            placeholder="First Name"
          />
        </div>
        <div className="formGroup">
          <input
            ref={lname}
            required
            type="text"
            className="control"
            placeholder="Last Name"
          />
        </div>
        <div className="formGroup">
          <input
            ref={age}
            min="1.0"
            required
            type="number"
            className="control"
            placeholder="Height"
          />
        </div>
        <div className="formGroup">
          <select ref={position} required name="" id="">
            <option value="Point Guard (PG)">Point Guard (PG)</option>
            <option value="Shooting Guard (SG)">Shooting Guard (SG)</option>
            <option value="Small Forward (SF)">Small Forward (SF)</option>
            <option value="Power Forward (PF)">Power Forward (PF)</option>
            <option value="Center (C)">Center (C)</option>
          </select>
        </div>
        <input ref={id} type="hidden" id={state.team.length + 1} />

        <input type="submit" value="Create Player" />
      </form>
    </div>
  );
}

export default CreateTeam;
