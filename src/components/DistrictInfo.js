import { useState } from "react";
import DistrictInfoTable from "./DistrictInfoTable";
import { useCountyContext } from "./countyProvider";


export default function DistrictInfo() {
  const [expandedInfo, setExpandedInfo] = useState(false);
  const {singleCounty}= useCountyContext();
  function handleClick(event) {
    event.preventDefault();
    setExpandedInfo(!expandedInfo);
  }

  if (!expandedInfo) {
    return (
    <div className="DistrictInfo">
      <p className="DistrictInfo-Subeading">
        SINCE
      </p>
      <h2 className="DistrictInfo-Heading">
        Insert year
      </h2>
      <p className="DistrictInfo-Description">
        Information about this County: 
      </p>
      <ul>
          <li>Name: {singleCounty.name}</li>
          <li>Pick Up: {singleCounty.pickUp}</li>
          <li>Commercial Law: {singleCounty.comLaw ? "Yes" : "No"}</li>
          <li>Residential Law: {singleCounty.resLaw ? "Yes" : "No"}</li>
        </ul>
      <div className="DistrictInfo-Table">
        <div>Current Recycling & Sustainability Services</div>
        <button className={expandedInfo ?  "expand-button" : "collapse-button"} onClick={handleClick}></button>
      </div>
      <DistrictInfoTable />
    </div>
    ) 
  }
  else {
    return(
      <div className="DistrictInfo">
        <div className="DistrictInfo-Table">
        <div>Current Recycling & Sustainability Services</div>
        <button className={expandedInfo ?  "expand-button" : "collapse-button"} onClick={handleClick}></button>
      </div>
      <DistrictInfoTable />
      Insert services info below      
      </div>
    )
  }
  
}

