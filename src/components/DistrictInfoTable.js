import { useState, useEffect } from "react";

export default function DistrictInfoTable() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(["yes", "yes", "no", "yes"]);
  }, [])

  return (
    // <div className="DistrictInfo-Services">
    //   <table>
    //     <tr className="DistrictInfo-TableRow">
    //       <td>Residential Pickup</td>
    //       <td>Drop-off Locations</td>
    //       <td>Micro-haulers</td>
    //       <td>Smart Bins</td>
    //     </tr>
    //     <tr className="DistrictInfo-TableRow">
    //       <td className={`${services[0]}-service-icon`}></td>
    //       <td className={`${services[1]}-service-icon`}></td>
    //       <td className={`${services[2]}-service-icon`}></td>
    //       <td className={`${services[3]}-service-icon`}></td>
    //     </tr>
    //   </table>
    // </div>
    <div className="DistrictInfo-Services">
      <div className="DistrictInfo-ServicesContainer">
        <div>Residential Pickup</div>
        <div className={`${services[0]}-service-icon`}></div>
      </div>
      <div className="DistrictInfo-ServicesContainer">
        <div>Drop-off Locations</div>
        <div className={`${services[1]}-service-icon`}></div>
      </div>
      <div className="DistrictInfo-ServicesContainer">
        <div>Micro-haulers</div>
        <div className={`${services[2]}-service-icon`}></div>
      </div>
      <div className="DistrictInfo-ServicesContainer">
        <div>Smart Bins</div>
        <div className={`${services[3]}-service-icon`}></div>
      </div>
    </div>
  )
}