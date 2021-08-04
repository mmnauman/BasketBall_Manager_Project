import React, { useReducer } from "react";
import { Reducer } from "./stateManagement/Reducer";

const initialState = {
    team: [],
}

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = React.createContext(initialState);
export default Store