import React, { useState, useContext, createContext,useEffect } from "react";

const CountyContext= createContext();

export function CountyProvider({children}){
    const storedSingleCounty= JSON.parse(localStorage.getItem('singleCounty'))
    const[counties,setCounty]= useState([]);
    const[singleCounty, setSingleCounty]= useState(storedSingleCounty);
    const[address, setAddress]= useState('');
    const[coordinates, setCoordinates] = useState([]);
    useEffect(()=>{
        localStorage.setItem('singleCounty',JSON.stringify(singleCounty))
    },[singleCounty])
   
    /* useEffect(() => {
        localStorage.setItem('counties', JSON.stringify(counties));
        localStorage.setItem('singleCounty', JSON.stringify(singleCounty));
        localStorage.setItem('address', JSON.stringify(address));
        localStorage.setItem('coordinates', JSON.stringify(coordinates));
      }, [counties, singleCounty, address, coordinates]);

    useEffect(() => {
        const savedCounties = localStorage.getItem('counties');
        const savedSingleCounty = localStorage.getItem('singleCounty');
        const savedAddress = localStorage.getItem('address');
        const savedCoordinates = localStorage.getItem('coordinates');
    
        if (savedCounties) setCounty(JSON.parse(savedCounties));
        if (savedSingleCounty) setSingleCounty(JSON.parse(savedSingleCounty));
        if (savedAddress) setAddress(savedAddress);
        if (savedCoordinates) setCoordinates(JSON.parse(savedCoordinates));
      }, []); */
    
    


    return(
        <CountyContext.Provider value={{counties,setCounty,singleCounty,setSingleCounty,address,setAddress, coordinates, setCoordinates}}>
            {children}
        </CountyContext.Provider>
    );

}

export const useCountyContext =() => useContext(CountyContext);
