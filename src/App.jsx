import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import { useState, useEffect } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [information, setInformation] = useState({});
  const [size, setSize] = useState(1);
  const [daten, setDaten] = useState({})
  const [magnitude, setMagnitude] = useState("4.5")
  const [zeitraum, setZeitraum] = useState("week")



  // useEffect! 
  useEffect(() => {
    fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${zeitraum}.geojson`)
      .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`); }
    return res.json(); })
      .then((res) => setDaten(res))
      .catch(err => console.error("Fetch failed:", err));
  },
  [magnitude, zeitraum]  
  );



  return (
    <div className="app">
      <Header setMagnitude={setMagnitude} setZeitraum={setZeitraum} />
      <Sidebar information={information} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map setInformation={setInformation} size={size} daten={daten}/>
      </div>
    </div>
  );
}

export default App;