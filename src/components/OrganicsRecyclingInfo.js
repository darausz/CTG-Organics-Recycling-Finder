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
const zipToCountyId = {
  "10458": 4,

};

export default function OrganicsRecyclingInfo({ address }) {
  const [shownItem, setShownItem] = useState("");
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
    if (selectedLocation) {
      setShownItem("solution");
    }
  }, [selectedLocation])

  return (
    <div className="OrganicsRecyclingInfo">
      <div className="OrganicsRecyclingInfo-Address">
        {address}
        {/* <p>{singleCounty ? singleCounty.name : 'Loading...'}</p> */}
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <h3 className="OrganicsRecyclingInfo-Header">
          In your area, there are recycling laws
        </h3>
        <div className="OrganicsRecyclingInfo-Description">
          Insert laws here
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={facilityIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Microhaulers Near You
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
            Select a composting solution near you
          </h3>
          <button name="solution" className={shownItem === "solution" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "solution" ?
            (selectedLocation ?
              (<>
              <p>{selectedLocation.name}</p>
              <p>Address: {selectedLocation.address}</p>
              <p>{selectedLocation.website ? `Website: ${selectedLocation.website}`: ""}</p>
              <p>{selectedLocation.email ? `Email: ${selectedLocation.email}`: ""}</p>
              <p>{selectedLocation.phoneNum ? `Phone Number: ${selectedLocation.phoneNum}`: ""}</p>
              <p>{selectedLocation.monthOpen ? `Months Open: ${selectedLocation.monthOpen}`: ""}</p>
              <p>{selectedLocation.timeOpen ? `Time Open: ${selectedLocation.timeOpen}`: ""}</p>
              </>)
              :
              "No location selected")
            :
            ""}
        </div>
      </div>
      {/*
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={guideIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            What Can Be Recycled: Recycling Guide
          </h3>
          <button name="guide" className={shownItem === "guide" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "guide" ? "shown text" : ""}
        </div>
      </div>
       
       <OrganicsRecyclingInfoDropdown
        name={"solution"}
        heading={"Find a Composting Solution Near You"}
        expand={expand}
        shownItem={shownItem}
        /> 
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={solutionIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Find a Composting Solution Near You : DropOff
          </h3>
          
          <ul>
           {dropOffs.map((dropOffss) => (
                <p key={dropOffss.id}>
                {dropOffss.name}, {dropOffss.address}
               </p>
                 ))}
          </ul>

          
          <button name="solution" className={shownItem === "solution" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
           {shownItem == "solution" ? "shown text" : ""} 
        
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={facilityIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Organic Waste Facility Location: MicroHaulers
          </h3>
          <button name="facility" className={shownItem === "facility" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        {microHaulers.map((microHaulerss)=> (
          <p key={microHaulerss.id}> {microHaulerss.name}, {microHaulerss.address}</p>
        ))}
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "facility" ? "shown text" : ""} 
        
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={faqIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Common FAQs
          </h3>
          <button name="faq" className={shownItem === "faq" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "faq" ? "shown text" : ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={helpIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Need more help?
          </h3>
          <button name="help" className={shownItem === "help" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "help" ? "shown text" : ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <h3 className="OrganicsRecyclingInfo-Header">
            Suggest an update
          </h3>
          <button name="suggestion" className={shownItem === "suggestion" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description">
          {shownItem == "suggestion" ? "shown text" : ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <h3 className="OrganicsRecyclingInfo-Header">
            Select a composting solution near you
          </h3>
          <button name="suggestion" className={shownItem === "suggestion" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
      </div>*/}
    </div>
  )
}
