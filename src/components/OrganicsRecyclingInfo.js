import { useState } from "react";
// import OrganicsRecyclingInfoDropdown from "./OrganicsRecyclingInfoDropdown";
import guideIcon from "../assets/guideIcon.png";
import solutionIcon from "../assets/solutionIcon.png";
import facilityIcon from "../assets/facilityIcon.png";
import faqIcon from "../assets/faqIcon.png";
import helpIcon from "../assets/helpIcon.png";

export default function OrganicsRecyclingInfo({ address }) {
  const [shownItem, setShownItem] = useState("");
  function expand(event) {
    if (shownItem == event.target.name) {
      setShownItem("");
    }
    else {
      setShownItem(event.target.name);
    }
  }

  return (
    <div className="OrganicsRecyclingInfo">
      <div className="OrganicsRecyclingInfo-Address">
        {address}
        <p>{singleCounty ? singleCounty.name : 'Loading...'}</p>
      </div>
      <div className="OrganicsRecyclingInfo-Section">
        <h3 className="OrganicsRecyclingInfo-Header">
          In your area, organic recycling is mandatory
        </h3>
        <div className="OrganicsRecyclingInfo-Description">
          Insert laws here
        </div>
      </div>
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
      {/* <OrganicsRecyclingInfoDropdown
        name={"solution"}
        heading={"Find a Composting Solution Near You"}
        expand={expand}
        shownItem={shownItem}
        /> */}
      <div className="OrganicsRecyclingInfo-Section">
        <div className="OrganicsRecyclingInfo-Dropdown">
          <img className="OrganicsRecyclingInfo-Icon" src={solutionIcon}></img>
          <h3 className="OrganicsRecyclingInfo-Header">
            Find a Composting Solution Near You
          </h3>
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
            Organic Waste Facility Location
          </h3>
          <button name="facility" className={shownItem === "facility" ? "collapse-button" : "expand-button"} onClick={expand}>
          </button>
        </div>
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
    </div>
  )
}

