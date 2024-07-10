import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useState} from 'react';
import { useCountyContext } from './countyProvider';
import MapController from './MapController';
import USStates from './USStates';

export default function Map({ mapType}) {
  const [center, setCenter] = useState([40.7, -74]);

  {/*replace with info from db */ }
  const mapCoords = {
    "type": "Feature",
    "properties":
      { "ZCTA5CE20": "10014", "GEOID20": "10014", "GEOIDFQ20": "860Z200US10014", "CLASSFP20": "B5", "MTFCC20": "G6350", "FUNCSTAT20": "S", "ALAND20": 1255850, "AWATER20": 0, "INTPTLAT20": "+40.7341455", "INTPTLON20": "-074.0060262" },
    "geometry":
    {
      "type": "MultiPolygon",
      "coordinates":
        [[[[-74.012345, 40.740193], [-74.011537, 40.740145], [-74.011456, 40.740818], [-74.009664, 40.740741], [-74.009331, 40.742572], [-74.008204, 40.742148], [-74.007705, 40.742834], [-74.004861, 40.741642], [-74.005158, 40.740858], [-74.004636, 40.741128], [-74.00273, 40.740291], [-74.002789, 40.739396], [-73.999555, 40.733611], [-74.001797, 40.730385], [-74.001347, 40.729887], [-74.002203, 40.729654], [-74.00182, 40.729063], [-74.00251, 40.729], [-74.003155, 40.727664], [-74.002513, 40.727601], [-74.00373, 40.72625], [-74.007434, 40.726601], [-74.00732, 40.727328], [-74.008264, 40.726986], [-74.009623, 40.727557], [-74.009907, 40.726073], [-74.009107, 40.725914], [-74.011089, 40.726114], [-74.010272, 40.73201], [-74.010016, 40.739375], [-74.01238, 40.739752], [-74.012345, 40.740193]]]]
    }
  };
  const polygon = mapCoords.geometry.coordinates[0][0];

  {/* swap coordinates because theyre stored the opposite way */ }
  polygon.forEach((coord) => {
    [coord[0], coord[1]] = [coord[1], coord[0]];
  })

  if (mapType == "country") {
    return (
      <div className="Map-Country">
        <USStates />
      </div>
    )
  }

  return (
    <div className="Map-State">
      <MapContainer center={center} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController />
      </MapContainer>
    </div>
  )
}
