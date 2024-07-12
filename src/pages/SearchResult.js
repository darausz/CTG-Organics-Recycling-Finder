import OrganicsRecyclingInfo from '../components/OrganicsRecyclingInfo.js';
import DistrictInfo from '../components/DistrictInfo.js';
import Map from '../components/Map.js';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { useCountyContext } from "../components/countyProvider.js";
import { useCityContext } from '../components/cityProvider.js';
import { useDropOffContext } from '../components/dropOffProvider.js';
import { useMicroHaulerContext } from '../components/microHaulerProvider.js';
import { useSmartBinContext } from '../components/smartBinsProvider.js';
import { smartBinIcon } from '../components/MapAssets.js';

const zipToCountyId = {
  "10458": 4,
};


export default function SearchResult() {
  const [county, setCounty] = useState(null);
  const [state, setState] = useState(null);
  const { address, singleCounty, setSingleCounty, setCoordinates } = useCountyContext();
  const { singleCity, setSingleCity } = useCityContext();
  const { setDropOffs } = useDropOffContext();
  const { setMicroHaulers } = useMicroHaulerContext();
  const { setSmartBins } = useSmartBinContext();



  // const location = useLocation();
  // const address = location.state;
  const [error, setError] = useState(null);
  const countyId = zipToCountyId[String(address)];
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (address) {
        try {
          const reversed = address.split(" ").reverse().join(" "); //reversed to search larger regions first because nominatim searches left to right
          const { data: [lookup] } = await axios.get(`https://nominatim.openstreetmap.org/search?q=${reversed}&format=json`);
          console.log(lookup);
          const boundingBox = lookup.boundingBox;
          const coords = [parseFloat(lookup.lat), parseFloat(lookup.lon)];
          const location = lookup.display_name.split(", ");

          if (isNaN(parseInt(location.at(-2)))) { //check if there is a zipcode
            setState(location.at(-2));
            setCounty(location.at(-3).replace(/ County$/, ''));
            console.log(location.at(-2) + " " + location.at(-3).replace(/ County$/, ''))
          } 
          else {
            setState(location.at(-3));
            setCounty(location.at(-4).replace(/ County$/, ''));
            console.log(location.at(-3) + " " + location.at(-4).replace(/ County$/, ''))
          }
          setCoordinates(coords);

        } catch (error) {
          setError('Error fetching coordinates');
          console.log(error);
        }
      }
      else {
        setError('Invalid address');
      }
    }
    
    function translateSpecialCase() {
      if (state === "New York" && county === "Kings") {
        setCounty("Brooklyn");
      }
    }

    fetchCoordinates();
    translateSpecialCase();
  }, [address, setCoordinates, setState, setCounty, setError]);

  useEffect(() => {
    const fetchCountyData = async () => {
      if (county !== null && state !== null) {
        try {
          const { data } = await axios.get(`http://localhost:5000/county/${county}/${state}`);
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
  }, [state, county, setSingleCounty, setError]);
 
  //Fetching DropOffs locations by name and state
  useEffect(() => {
    const fetchDropOffByCounty = async () => {
      if (singleCounty !== null) {
        try {
          const { data } = await axios.get(`http://localhost:5000/dropOff/${singleCounty.name}/${singleCounty.state}`);
          setDropOffs(data);
        } catch (err) {
          setError('Error fetching data');
          console.log(error);
        }
      } else {
        setError('invalid address');
      }
    };
    fetchDropOffByCounty();
  }, [singleCounty, setDropOffs])
 
   //Fetching SmartBin locations by name and state
   useEffect(() => {
    const fetchSmartBinByCounty = async () => {
      if (singleCounty !== null) {
        try {
          const { data } = await axios.get(`http://localhost:5000/smartBin/${singleCounty.name}/${singleCounty.state}`);
          console.log('smart bins:', data);
          setSmartBins(data);
        } catch (err) {
          setError('Error fetching data');
          console.log(error);
        }
      } else {
        setError('invalid address');
      }
    };
    fetchSmartBinByCounty();
  }, [singleCounty, setSmartBins, setError])

  //Fetching Microhauler by name and state
  useEffect(() => {
    const fetchMicroHaulerByCounty = async () => {
      if (singleCounty !== null) {
        try {
          const { data } = await axios.get(`http://localhost:5000/microHauler/${singleCounty.name}/${singleCounty.state}`);
          console.log('microhaulers:', data);
          setMicroHaulers(data);
        } catch (err) {
          setError('Error fetching data');
          console.log(error);
        }
      } else {
        setError('invalid address');
      }
    };
    fetchMicroHaulerByCounty();
  }, [singleCounty, setMicroHaulers, setError])



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
            CITY: {singleCounty.name}, STATE: {singleCity.name}
          </h1>
        </header>
        <div className='state-infographic-body'>
          <Map mapType="state" />
          <DistrictInfo />
        </div>
      </div>
      <div className='organics-recycling-info-container'>
        <button>
          <Link className='back-button' to="/search"></Link>
        </button>
        <OrganicsRecyclingInfo address={address} />
      </div>
    </div>
  )
}