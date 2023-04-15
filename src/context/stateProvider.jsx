import { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
//creaing context
export const StateProvider = ({ initialState, reducer, children }) => (
  //making context avalible to children
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
