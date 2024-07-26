import Map from '../components/Map.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCountyContext } from "../components/countyProvider.js";
import strongPolicyIcon from "../assets/strongPolicyIcon.png";
import moderatePolicyIcon from "../assets/moderatePolicyIcon.png";
import weakPolicyIcon from "../assets/weakPolicyIcon.png";
import noPolicyIcon from "../assets/noPolicyIcon.png";


export default function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { address, setAddress, setCoordinates } = useCountyContext();

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
            COMPOST SOLUTIONS FINDER
          </h1>
        </header>
        <Map mapType="country" />
      </div>
      <div className='search-container'>
        <div className="search-header">
          <h3 className="search-heading">
          Find Composting Solutions Near You
          </h3>
          <p className="search-description">
          Enter information for services in your area.
          </p>
        </div>
        <div className='search-address-container'>
          <h4 className='search-address-heading'>
            Address (Required)
          </h4>
          <input className="search-address-field" type="text" value={input} onChange={e => setInput(e.target.value)}></input>
          <button className='search-button navigate-button'>
            <Link to="/search/result" onClick={handleClick}>
              Search
            </Link>
          </button>
        </div>
        <div className='search-legend'>
          <div className='search-legend-description'>Organic Waste Bans & Recycling Policies</div>
          <div className='search-policy-container'>
            <div className='search-policy'>
              <img className='search-policy-color' src={strongPolicyIcon} />
              <div className='search-policy-category'>
                Strong Policy
              </div>
            </div>
            <div className='search-policy'>
              <img className='search-policy-color' src={moderatePolicyIcon} />
              <div className='search-policy-category'>
                Moderate Policy
              </div>
            </div>
            <div className='search-policy'>
              <img className='search-policy-color' src={weakPolicyIcon} />
              <div className='search-policy-category'>
                Weak Policy
              </div>
            </div>
            <div className='search-policy'>
              <img className='search-policy-color' src={noPolicyIcon} />
              <div className='search-policy-category'>
                No Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}