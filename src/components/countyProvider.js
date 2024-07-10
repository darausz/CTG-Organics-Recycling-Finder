import React, { useState, useContext, createContext } from "react";

const CountyContext= createContext();

export function CountyProvider({children}){
    const[counties,setCounty]= useState([]);
    const[singleCounty, setSingleCounty]= useState({});
    const[address, setAddress]= useState('');


    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty,address,setAddress}}>
            {children}
        </CountyContext.Provider>
    );

}

export const useCountyContext =() => useContext(CountyContext);
