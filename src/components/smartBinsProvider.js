import React, { useState, useContext, createContext,useEffect } from "react";

const SmartBinContext= createContext();

export function SmartBinsProvider({children}){
    const [smartBins, setSmartBins] = useState([]);
    const [singleSmartBins, setSingleSmartBins]= useState({});
    useEffect(() => {
        const savedSmartBins = localStorage.getItem('smartBins');
        const savedSingleSmartBins = localStorage.getItem('singleSmartBins');
    
        if (savedSmartBins) setSmartBins(JSON.parse(savedSmartBins));
        if (savedSingleSmartBins) setSingleSmartBins(JSON.parse(savedSingleSmartBins));
      }, []);
    
      useEffect(() => {
        localStorage.setItem('smartBins', JSON.stringify(smartBins));
        localStorage.setItem('singleSmartBins', JSON.stringify(singleSmartBins));
      }, [smartBins, singleSmartBins]);

    return(
        <SmartBinContext.Provider value ={{smartBins,setSmartBins,singleSmartBins,setSingleSmartBins}}>
            {children}
        </SmartBinContext.Provider>
    );

}

export const useSmartBinContext= () => useContext(SmartBinContext);