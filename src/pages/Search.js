import Map from '../components/Map.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCountyContext } from "../components/countyProvider.js";



export default function Search() {

 const {setAddress} = useCountyContext();
  const handleClick= () => {
    console.log('Hello Ninjas');
  }

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
            <Link to="/search/result">
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