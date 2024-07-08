import OrganicsRecyclingInfo from '../components/OrganicsRecyclingInfo.js';
import DistrictInfo from '../components/DistrictInfo.js';
import Map from '../components/Map.js';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useCountyContext } from "../components/countyProvider.js";
import axios from 'axios';
const zipToCountyId = {
  "10458": 4,
  "1": 1
};


export default function SearchResult() {
  const { address, setSingleCounty } = useCountyContext();
  const location = useLocation();
 // const address = location.state;
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchCountyData = async () => {
     const countyId = zipToCountyId[String(address)];
     console.log("hiii");
     console.log(countyId);
     if (countyId) {
       try {
         const {data} = await axios.get(`http://localhost:5000/county/${countyId}`);
         console.log(data);
         setSingleCounty(data);
       } catch (error) {
         setError('Error fetching data');
         console.log(error);
       }
     } else {
       setError('Invalid address');
     }
   };

   fetchCountyData();
 }, [address,setSingleCounty]);

  return (
    <div className='search-result-page'>
      <div className="state-infographic-container">
        <header className="state-infographic-header header">
          <h1 className="bold">
            CITY, STATE
          </h1>
        </header>
        <div className='state-infographic-body'>
          <Map mapType="state"/>
          <DistrictInfo />
        </div>
      </div>
      <div className='organics-recycling-info-container'>
      <button>
        <Link className='back-button' to="/search"></Link>
      </button>
        <OrganicsRecyclingInfo address={address}/>
      </div>
    </div>
  )
}