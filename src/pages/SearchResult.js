import OrganicsRecyclingInfo from '../components/OrganicsRecyclingInfo.js';
import DistrictInfo from '../components/DistrictInfo.js';
import Map from '../components/Map.js';
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import { useCountyContext } from "../components/countyProvider.js";
import { useCityContext } from '../components/cityProvider.js';
const zipToCountyId = {
  "10458" : 4,
 
};


export default function SearchResult() {
  const {address} = useCountyContext();
  const {singleCounty,setSingleCounty}=useCountyContext();
  const { singleCity, setSingleCity } = useCityContext();

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

 useEffect(() => {
  const fetchCityData = async () => {
    if (singleCounty.cityId) {
      try {
        const { data } = await axios.get(`http://localhost:5000/city/${singleCounty.cityId}`);
        setSingleCity(data);
      } catch (error) {
        setError('Error fetching city data');
        console.log(error);
      }
    }
  };

  fetchCityData();
}, [singleCounty, setSingleCity]);


    

/* const filterDropOffLocations2 = (countyData) => {
  if (countyData && countyData.dropOff) {
    const dropOffObjects = countyData.dropOff.map(location => {
      const [name, location, website, email, time, phoneNumber, months] = location.split(',').map(item => item.trim());
      return {
        name,
        location,
        website,
        email,
        time,
        phoneNumber,
        months
      };
    });
    setDropOffLocations(dropOffObjects);
  }
};
 */


  return (
    <div className='search-result-page'>
      <div className="state-infographic-container">
        <header className="state-infographic-header header">
          <h1 className="bold">
            CITY: {singleCounty.name}, STATEID: {singleCounty.cityId} , STATE: {singleCity.name}
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