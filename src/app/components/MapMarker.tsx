import { Marker, Popup } from "react-leaflet";
import { LatLngExpression, icon } from "leaflet";
import { Element } from "./types/types";

const ICON = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  //iconUrl: require("../images/marker.png"),
  iconSize: [24, 24],
});

const getMarkers = (data: Element[]) => {
  //console.log("MapMarker received data:", data); //DEBUG

  return data.map((element: Element) => {
    return (
      <Marker
        position={[element.lat, element.lon] as LatLngExpression}
        icon={ICON}
        key={element.id}
      >
        <Popup>{element.tags.name}</Popup>
      </Marker>
    );
  });
};

const MapMarker = (props: { data: Element[] }) => {
  const { data } = props;

  return <>{getMarkers(data)}</>;
};
export default MapMarker;
