import { Polygon, Marker, useMap } from 'react-leaflet';
//get services
export default function MapController({polygon}) {
  const map = useMap();
  console.log(map);
  //forEach or map return <Marker ... />
  return <Polygon
    eventHandlers={{
      mouseover: (event) => { event.target.setStyle({ fillColor: 'purple' }); },
      mouseout: (event) => { event.target.setStyle({ fillColor: 'none' }); },
      mousedown: (event) => { map.fitBounds(event.target.getBounds()) }
    }}
    positions={polygon}
  />
}
