import { useState } from "react";
import DistrictInfoTable from "./DistrictInfoTable";

export default function DistrictInfo() {
  const [expandedInfo, setExpandedInfo] = useState(false);
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
        Insert law description here
      </p>
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

