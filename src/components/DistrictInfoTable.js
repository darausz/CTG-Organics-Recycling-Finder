import { useState, useEffect } from "react";

export default function DistrictInfoTable() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    setServices(["yes", "yes", "no", "yes"]);
  }, [])

  return (
    <div className="DistrictInfo-Services">
      <table>
        <tr>
          <td>Residential Pickup</td>
          <td>Drop-off Locations</td>
          <td>Micro-haulers</td>
          <td>Smart Bins</td>
        </tr>
        <tr>
          <td className={`${services[0]}-service-icon`}></td>
          <td className={`${services[1]}-service-icon`}></td>
          <td className={`${services[2]}-service-icon`}></td>
          <td className={`${services[3]}-service-icon`}></td>
        </tr>
      </table>
    </div>
  )
}