import { useState, useEffect } from "react";
import guideIcon from "../assets/guideIcon.png";
import solutionIcon from "../assets/solutionIcon.png";
import facilityIcon from "../assets/facilityIcon.png";
import faqIcon from "../assets/faqIcon.png";
import helpIcon from "../assets/helpIcon.png";
import axios from 'axios';
import { useCountyContext } from "./countyProvider";
import { CountyProvider } from "./countyProvider";
import { useDropOffContext } from "./dropOffProvider";
import { useMicroHaulerContext } from "./microHaulerProvider";
import FourPillarsDescription from "./FourPillarsDescription";
const zipToCountyId = {
  "10458": 4,

};

export default function OrganicsRecyclingInfo({ address }) {
  const [shownItem, setShownItem] = useState("pillars");
  const { singleCounty, selectedLocation } = useCountyContext();
  const { dropOffs } = useDropOffContext();
  const { microHaulers } = useMicroHaulerContext();

  const [error, setError] = useState(null);

  function expand(event) {
    if (shownItem == event.target.name) {
      setShownItem("");
    }
    else {
      setShownItem(event.target.name);
    }
  }

  useEffect(() => {
    if (Object.keys(selectedLocation).length !== 0) {
      console.log(selectedLocation)
      setShownItem("solution");
    }
  }, [selectedLocation])

  return (
    <div className="OrganicsRecyclingInfo">
      <div className="OrganicsRecyclingInfo-Section">
        <div > Showing results for:</div>
        <div className="OrganicsRecyclingInfo-Address">
          {address}
        </div>
        <div className="OrganicsRecyclingInfo-Description">
        {!(singleCounty.comLaw && singleCounty.resLaw) ? "There are no recycling laws in your area" : ""}
      {singleCounty.resLaw !== null ? (
    <div>
      Residential recycling laws:  <a href={`${singleCounty.resLaw}`}>
        {singleCounty.resLaw}
      </a>
    </div>
         ) : ""}
     {singleCounty.comLaw !== null ? (
      <div>
      Commercial recycling laws:  <a href={`${singleCounty.comLaw}`}>
        {singleCounty.comLaw}
      </a>
    </div>
       ) : ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={facilityIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Microhaulers Near You ({microHaulers.length})
          </h3>
          <button name="facility" className={shownItem === "facility" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "facility" ? <>{microHaulers.map((microHauler) => (
            <p key={microHauler.id}> {microHauler.name}, {microHauler.phoneNum}</p>
          ))}</> : ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={solutionIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Select a Composting Solution Near You
          </h3>
          <button name="solution" className={shownItem === "solution" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "solution" ?
            (selectedLocation !== null ?
              (<>
                <p>{selectedLocation.name}</p>
                <p>{selectedLocation.address ? `Address: ${selectedLocation.address}` : ""}</p>
                <p>{selectedLocation.website ? `Website: ${selectedLocation.website}` : ""}</p>
                <p>{selectedLocation.email ? `Email: ${selectedLocation.email}` : ""}</p>
                <p>{selectedLocation.phoneNum ? `Phone Number: ${selectedLocation.phoneNum}` : ""}</p>
                <p>{selectedLocation.monthOpen ? `Months Open: ${selectedLocation.monthOpen}` : ""}</p>
                <p>{selectedLocation.timeOpen ? `Time Open: ${selectedLocation.timeOpen}` : ""}</p>
              </>)
              :
              "No location selected")
            :
            ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={guideIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            What are the Composting Solutions?
          </h3>
          <button name="pillars" className={shownItem === "pillars" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "pillars" ? <FourPillarsDescription /> : ""}
        </div>
      </div>
    </div>
  )
}
