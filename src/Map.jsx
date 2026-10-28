import { MapContainer, TileLayer, Marker, Popup, CircleMarker, GeoJSON } from "react-leaflet";


import data from "./assets/4.5_week.geojson.json";
import plates from "./assets/plate_boundaries.geojson.json"
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";


export const Map = ({setInformation, size}) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[30, 7]}
      zoom={3}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
        attribution={'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
      />

      <GeoJSON data={plates} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** size}
          pathOptions={{ color: "green", fillColor: "red" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <Button variant="contained" color="primary" size="small"
              onClick={() => setInformation(d)}>Details anzeigen</Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
