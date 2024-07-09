import React, { useState, useContext, createContext } from "react";

const DropOffContext= createContext();

export function DropoffProvider({children}){

    const [dropOffs, setDropOffs] = useState([]);
    const [singleDropOff,setSingleDropOff]= useState({});

    return (
        <DropOffContext.Provider value={{dropOffs,setDropOffs,singleDropOff,setDropOffs}}>
            {children} 
        </DropOffContext.Provider>
    );

}

export const useDropOffContext=() => useContext(DropOffContext);