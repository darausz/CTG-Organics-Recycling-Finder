import OrganicsRecyclingInfo from '../components/OrganicsRecyclingInfo.js';
import DistrictInfo from '../components/DistrictInfo.js';
import Map from '../components/Map.js';
import { Link } from "react-router-dom";

export default function SearchResult() {
  return (
    <div className='search-page'>
      <div className="state-infographic-container">
        <header className="state-infographic-header header">
          <h1 className="bold">
            CITY, STATE
          </h1>
        </header>
        <div className='state-infographic-body'>
          <Map />
          <DistrictInfo />
        </div>
      </div>
      <div className='organics-recycling-info-container'>
      <button className='back-button'>
        <Link to="/">
          {"<-"}
        </Link>
      </button>
        <OrganicsRecyclingInfo />
      </div>
    </div>
  )
}