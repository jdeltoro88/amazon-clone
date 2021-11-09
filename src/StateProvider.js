import React, { createContext, useContext, useReducer } from 'react';
//data prep
export const StateContext = createContext();
//wraps app and provides data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider 
    value={useReducer(reducer,initialState)}>
    </StateContext.Provider>
);
//pull info from data
export const useStateValue = () => useContext(StateContext);

//bug here not sure where