import { Polygon, Marker, useMap } from 'react-leaflet';

export default function MapController({polygon}) {
  const map = useMap();
  console.log(map);
  return <Polygon
    eventHandlers={{
      mouseover: (event) => { event.target.setStyle({ fillColor: 'purple' }); },
      mouseout: (event) => { event.target.setStyle({ fillColor: 'none' }); },
      mousedown: (event) => { map.fitBounds(event.target.getBounds()) }
    }}
    positions={polygon}
  />
}
