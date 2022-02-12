import React,{createContext, useContext, useReducer} from "react";
import { useLocalStorageReducer } from "./Custom_Hooks/useLocalStorage";

export const StateContext=createContext();

function StateContextProvider({reducer,children,initialState}){
    return(
        <StateContext.Provider value={useLocalStorageReducer('wishList',initialState,reducer)}>
            {children}
        </StateContext.Provider> 
    )
}

export const useStateValue=()=>useContext(StateContext);

export default StateContextProvider;