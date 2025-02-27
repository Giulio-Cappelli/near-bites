import { LatLngExpression } from "leaflet";
import { OverpassData } from "../types/types";

const fetchData = async (
  coords: LatLngExpression,
  radius: number
): Promise<OverpassData> => {
  const query = `
    [out:json][timeout:30];
    node(around:${radius},${coords.toString()})["amenity"~"restaurant|cafe|bar"];
    out;
  `;

  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Specifica il tipo di contenuto
    body: "data=" + encodeURIComponent(query),
  });

  const data = await response.json();
  return data;
};
export default fetchData;
