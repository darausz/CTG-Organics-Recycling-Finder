import React, { useState, useContext, createContext } from "react";

const MicroHaulerContext= createContext();

export function MicroHaulerProvider({children}){

    const [microHaulers, setMicroHaulers] = useState([]);
    const [singleMicroHauler,setSingleMicroHauler]= useState({});

    return (
        <MicroHaulerContext.Provider value={{microHaulers,setMicroHaulers,singleMicroHauler,setSingleMicroHauler}}>
            {children} 
        </MicroHaulerContext.Provider>
    );

}

export const useMicroHaulerContext=() => useContext(MicroHaulerContext);