import guideIcon from "../assets/guideIcon.png";
import solutionIcon from "../assets/solutionIcon.png";
import facilityIcon from "../assets/facilityIcon.png";
import faqIcon from "../assets/faqIcon.png";
import helpIcon from "../assets/helpIcon.png";

export default function OrganicsRecyclingInfoDropdown({ heading, name, expand, shownItem }) {
  return (
    <div className="OrganicsRecyclingInfo-Dropdown">
      <img className="OrganicsRecyclingInfo-Icon" src={`${name}Icon`}></img>
      <h3 className="OrganicsRecyclingInfo-Header">
        {heading}
      </h3>
      <button name={name} className={shownItem === `${name}` ? "collapse-button" : "expand-button"} onClick={expand}>
      </button>
    </div>
  )
}