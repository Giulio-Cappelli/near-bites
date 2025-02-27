import { LatLngExpression, icon } from "leaflet";
import { Marker } from "react-leaflet";

const ICON = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  //iconUrl: require("../images/marker.png"),
  iconSize: [24, 24],
});

const UserMarker = (props: { position: LatLngExpression }) => {
  const { position } = props;

  return (
    <Marker
      position={position}
      icon={ICON}
      key={0}
    >
    </Marker>
  );
};
export default UserMarker;
