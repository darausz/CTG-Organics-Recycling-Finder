import React, { useState, useContext, createContext } from "react";

const CountyContext= createContext();

export function CountyProvider({children}){
    const[counties,setCounty]= useState([]);
    const [singleCounty, setSingleCounty]= useState(null);

    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty}}>
            {children}
        </CountyContext.Provider>
    );

}