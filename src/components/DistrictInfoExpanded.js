import DistrictInfoTable from "./DistrictInfoTable";

export default function DistrictInfoExpanded() {
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
      <a>Current Recycling & Sustainability Services</a>
      <DistrictInfoTable />
    </div>
  )
}

