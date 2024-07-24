import Map from '../components/Map.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCountyContext } from "../components/countyProvider.js";
import axios from "axios";

export default function Search() {
  const[input, setInput] = useState("");
  const[error, setError] = useState("");
  const { address, setAddress } = useCountyContext();
  const {setCoordinates}= useCountyContext();

  const handleClick = () => {
    setAddress(input);
  }
  useEffect(() => {
    // Reset coordinates when the component mounts
    setCoordinates([40.7, -74]);
  }, [setCoordinates]); 
  return (
    <div className='search-page'>
      <div className="country-container">
        <header className="country-header header">
          <h1 className="bold">
            ORGANICS RECYCLING FINDER
          </h1>
        </header>

        <Map mapType="country" />

      </div>
      <div className='search-container'>
        <div className="search-header">
          <h3 className="search-heading">
            Find Organic Recycling Information
          </h3>
          <p className="search-description">
            Enter information to search services in your area.
          </p>
        </div>
        <div className='search-address-container'>
          <h4 className='search-address-heading'>
            Address (Required)
          </h4>
          <input className="search-address-field" type="text" value={input} onChange={e => setInput(e.target.value)}></input>
          <button className='search-button'>
            <Link to="/search/result" onClick={handleClick}>
              Search
            </Link>
          </button>
        </div>
        <div className='search-legend'>
          <p>Organic waste bans & waste recycling laws categories</p>
          <p>Strong Policy Moderate Policy Weak Policy No Policy</p> {/* turn into flexbox later */}
        </div>
      </div>
    </div>
  )
}