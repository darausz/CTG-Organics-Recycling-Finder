import React, { useState, useContext, createContext } from "react";

const CountyContext= createContext();

export function CountyProvider({children}){
    const[counties,setCounty]= useState([]);
<<<<<<< HEAD
    const [singleCounty, setSingleCounty]= useState([]);
    const[address, setAddress]= useState('');

    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty,address,setAddress}}>
=======
    const [singleCounty, setSingleCounty]= useState(null);

    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty}}>
>>>>>>> 4bd0f6ef778ffba1b562ae7ebbae7fd8fc69c162
            {children}
        </CountyContext.Provider>
    );

<<<<<<< HEAD
}

export const useCountyContext =() => useContext(CountyContext);
=======
}
>>>>>>> 4bd0f6ef778ffba1b562ae7ebbae7fd8fc69c162
