import React, { useState, useContext, createContext } from "react";

const SmartBinContext= createContext();

export function SmartBinsProvider({children}){
    const [smartBins, setSmartBins] = useState([]);
    const [singleSmartBins, setSingleSmartBins]= useState({});

    return(
        <SmartBinContext.Provider value ={{smartBins,setSmartBins,singleSmartBins,setSingleSmartBins}}>
            {children}
        </SmartBinContext.Provider>
    );

}

export const useSmartBinContext= () => useContext(SmartBinContext);