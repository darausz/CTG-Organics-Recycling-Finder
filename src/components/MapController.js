import { Polygon, Marker, useMap, Popup } from 'react-leaflet';
import { useCountyContext } from './countyProvider';
import MapLocationMarker from './MapLocationMarker';
import { dropOffIcon } from './MapAssets';

export default function MapController({ polygon }) {
  const { singleCounty } = useCountyContext();
  const fakeCoords = [[40.740193, -74.012345], [ 40.740145, -74.011537], [40.740818, -74.011456]];
  const map = useMap();
  console.log(map);
  //forEach or map return <Marker ... />
  return (
    // <Polygon
    //   eventHandlers={{
    //     mouseover: (event) => { event.target.setStyle({ fillColor: 'purple' }); },
    //     mouseout: (event) => { event.target.setStyle({ fillColor: 'none' }); },
    //     mousedown: (event) => { map.fitBounds(event.target.getBounds()) }
    //   }}
    //   positions={polygon}
    // />
    <>
    <MapLocationMarker />
    {singleCounty.dropOff ? 
     (singleCounty.dropOff.map((marker, index) => {
      return(
        <Marker 
        position={
          fakeCoords[index]
        }
        icon={dropOffIcon}>
          <Popup>{marker}</Popup>
        </Marker>
      )
     })): 
     ""}
    </>
  )
}
