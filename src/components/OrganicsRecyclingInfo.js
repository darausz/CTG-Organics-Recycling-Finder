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
import { useMicrohaulerContext } from "./microhaulerProvider";
import FourPillarsDescription from "./FourPillarsDescription";

export default function OrganicsRecyclingInfo({ address }) {
  const [shownItem, setShownItem] = useState("pillars");
  const { singleCounty, selectedLocation } = useCountyContext();
  const { dropOffs } = useDropOffContext();
  const { microhaulers } = useMicrohaulerContext();

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
          {(singleCounty.comLaw === "no" && singleCounty.resLaw === "no") ? "There are no recycling laws in your area"
            : !(singleCounty.comLaw === "no" && singleCounty.resLaw === "no") ?
              <div>There are<a className="OrganicsRecyclingInfo-DescriptionLink" href={`${singleCounty.resLaw}`} target="_blank"> &nbsp;residential&nbsp;
                </a>
                and
                <a className="OrganicsRecyclingInfo-DescriptionLink" href={`${singleCounty.comLaw}`} target="_blank">
                  &nbsp;commercial&nbsp;
                </a>
                composting laws in your area
              </div>
              : (singleCounty.comLaw) ?
                <div>
                  There are
                  <a className="OrganicsRecyclingInfo-DescriptionLink" href={`${singleCounty.comLaw}`} target="_blank">
                    &nbsp;commercial&nbsp;
                  </a>
                  composting laws in your area
                </div>
                : (singleCounty.resLaw) ?
                  <div>
                    There are
                    <a className="OrganicsRecyclingInfo-DescriptionLink" href={`${singleCounty.comLaw}`} target="_blank">
                      &nbsp;residential&nbsp;
                    </a>
                    composting laws in your area
                  </div>
                  : ""}
        </div>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={facilityIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Microhaulers Near You ({microhaulers.length})
          </h3>
          <button name="facility" className={shownItem === "facility" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
        <div className="OrganicsRecyclingInfo-Description OrganicsRecyclingInfo-Microhauler-Description">
          {shownItem == "facility" ? <>{microhaulers.map((microhauler) => (
            <div key={microhauler.id}> 
              <p className="OrganicsRecyclingInfo-DescriptionName">{microhauler.name}</p>
                <p>{microhauler.address ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Address: </span>{microhauler.address}</div> : ""}</p>
                <p>{microhauler.website ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Website: </span>{microhauler.website}</div> : ""}</p>
                <p>{microhauler.email ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Email: </span>{microhauler.email}</div> : ""}</p>
                <p>{microhauler.phoneNum ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Phone Number: </span>{microhauler.phoneNum}</div> : ""}</p>
            </div>
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
                <p className="OrganicsRecyclingInfo-DescriptionName">{selectedLocation.name}</p>
                <p>{selectedLocation.address ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Address: </span>{selectedLocation.address}</div> : ""}</p>
                <p>{selectedLocation.website ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Website: </span>Website: {selectedLocation.website}</div> : ""}</p>
                <p>{selectedLocation.email ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Email: </span>{selectedLocation.email}</div> : ""}</p>
                <p>{selectedLocation.phoneNum ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Phone Number: </span>{selectedLocation.phoneNum}</div> : ""}</p>
                <p>{selectedLocation.monthOpen ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Months Open: </span>{selectedLocation.monthOpen}</div> : ""}</p>
                <p>{selectedLocation.timeOpen ? <div><span className="OrganicsRecyclingInfo-DescriptionLabel">Hours Open: </span>{selectedLocation.timeOpen}</div> : ""}</p>
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
