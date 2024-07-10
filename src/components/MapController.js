import { Polygon, Marker, useMap, Popup } from 'react-leaflet';
import { useCountyContext } from './countyProvider';
import MapLocationMarker from './MapLocationMarker';
import { dropOffIcon } from './MapAssets';

export default function MapController() {
  const { singleCounty, coordinates } = useCountyContext();
  // const fakeCoords = [[40.740193, -74.012345], [ 40.740145, -74.011537], [40.740818, -74.011456]];
  const fakeCoords = [[40.746199, -73.919118],
  [40.76298114, -73.92041435],
  [40.73589411, -73.98222696],
  [40.77068591, -73.98008527],
  [40.81491836, -73.95299658],
  [40.68161005, -73.9039715],
  [40.68085262, -73.91968254],
  [40.67310418, -73.96755293],
  [40.873838, -73.895344],
  [40.87214621, -73.88263956],
  [40.87989884, -73.87587871],
  [40.62262016, -74.14456081],
  [40.64305723, -74.07695856],
  [40.61258951, -74.06930957],
  [40.6337035, -74.14217077],
  [40.76558558, -73.92632732],
  [40.7649409, -73.92701134],
  [40.76524333, -73.92510952],
  [40.76499499, -73.92496582],
  [40.76656937, -73.92594543],
  [40.76701706, -73.92599747]
  ];
  const testAddress = "30-11 30th Dr, Queens, NY 11102";
  const map = useMap();
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
      {/* {singleCounty.dropOff ?
        (singleCounty.dropOff.map((marker, index) => {
          return (
            <Marker
              position={
                fakeCoords[index]
              }
              icon={dropOffIcon}>
              <Popup>{marker}</Popup>
            </Marker>
          )
        })) :
        ""} */}
      {fakeCoords ?
        (fakeCoords.map((marker, index) => {
          return (
            <Marker
              position={
                marker
              }
              icon={dropOffIcon}>
              <Popup>{marker}</Popup>
            </Marker>
          )
        })) :
        ""}
    </>
  )
}
