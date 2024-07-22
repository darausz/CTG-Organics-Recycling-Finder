import React, { useState, useContext, createContext } from "react";

const CountyContext= createContext();

export function CountyProvider({children}){
    const[counties,setCounty]= useState([]);
    const[singleCounty, setSingleCounty]= useState({});
    const[address, setAddress]= useState('');
    const[coordinates, setCoordinates] = useState([]);
    const[selectedLocation, setSelectedLocation] = useState({});


    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty,address,setAddress, coordinates, setCoordinates, selectedLocation, setSelectedLocation}}>
            {children}
        </CountyContext.Provider>
    );

}

export const useCountyContext =() => useContext(CountyContext);
