import OrganicsRecyclingInfo from '../components/OrganicsRecyclingInfo.js';
import DistrictInfo from '../components/DistrictInfo.js';
import Map from '../components/Map.js';
import { Link, useLocation } from "react-router-dom";

export default function SearchResult() {
  const location = useLocation();
  const address = location.state;

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