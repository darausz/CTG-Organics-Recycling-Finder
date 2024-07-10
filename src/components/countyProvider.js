import React, { useState, useContext, createContext } from "react";

const CountyContext= createContext();

export function CountyProvider({children}){
    const[counties,setCounty]= useState([]);
    const[singleCounty, setSingleCounty]= useState({});
    const[address, setAddress]= useState('');
    const[dropOffLocations, setDropOffLocations] = useState([]);
    const[microHaulers, setMicroHauler]= useState([]);
    const[coordinates, setCoordinates] = useState([]);

    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty,address,setAddress,dropOffLocations,setDropOffLocations, microHaulers,setMicroHauler, coordinates, setCoordinates}}>
            {children}
        </CountyContext.Provider>
    );

}

export const useCountyContext =() => useContext(CountyContext);
