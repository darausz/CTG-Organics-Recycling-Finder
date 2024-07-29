import React, { useState, useContext, createContext,useEffect } from "react";

const SmartBinContext= createContext();

export function SmartBinsProvider({children}){
  /* const storedSmartBins=localStorage.getItem('smartBins');
  let parsedSmartBins;
  if(storedSmartBins){
    parsedSmartBins= JSON.parse(storedSmartBins);
  }else{
    parsedSmartBins= [];
  } */

    const [smartBins, setSmartBins] = useState([]);
    const [singleSmartBins, setSingleSmartBins]= useState({});
    /* useEffect(()=>{
      localStorage.setItem('smartBins',JSON.stringify(smartBins))
    },[smartBins]) */

    return(
        <SmartBinContext.Provider value ={{smartBins,setSmartBins,singleSmartBins,setSingleSmartBins}}>
            {children}
        </SmartBinContext.Provider>
    );

}

export const useSmartBinContext= () => useContext(SmartBinContext);