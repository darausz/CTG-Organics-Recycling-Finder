import React, { useState, useContext, createContext, useEffect } from "react";

const MicroHaulerContext= createContext();

export function MicroHaulerProvider({children}){
    const storedMicrohaulers=localStorage.getItem('microHaulers');
    let parsedMicroHaulers;
    if(storedMicrohaulers){
        parsedMicroHaulers = JSON.parse(storedMicrohaulers);
    }else{
        parsedMicroHaulers=[];
    }

    const [microHaulers, setMicroHaulers] = useState([]);
    const [singleMicroHauler,setSingleMicroHauler]= useState({});

    useEffect(()=>{
        localStorage.setItem('microHaulers',JSON.stringify(microHaulers))
    }, [microHaulers])

    return (
        <MicroHaulerContext.Provider value={{microHaulers,setMicroHaulers,singleMicroHauler,setSingleMicroHauler}}>
            {children} 
        </MicroHaulerContext.Provider>
    );

}

export const useMicroHaulerContext=() => useContext(MicroHaulerContext);