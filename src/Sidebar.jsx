import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export const Sidebar = ({information, size, setSize}) => (
  <div className="aside">
    <aside>
      <Card>
        <CardContent>
          <Typography variant="h6">Ausgewähltes Erdbeben</Typography>
    <Typography variant="body2">Lage: {information.properties?.place ?? ""}</Typography>
    <Typography variant="body2">Epizentrum: Lat {information.geometry?.coordinates?.[1] ?? ""}, Lon {information.geometry?.coordinates?.[0] ?? ""}</Typography>
    <Typography variant="body2">Stärke: {information.properties?.mag ?? ""}</Typography>
    <Typography variant="body2">Zeitpunkt: {information.properties?.time? new Date(information.properties.time).toLocaleString(): ""}</Typography>
      </CardContent>
      </Card>
      <Slider valueLabelDisplay="auto" marks min={1} max={3} step={0.5} value={size}
      onChange={(event, newValue) => setSize(newValue)}></Slider>
    </aside>
  </div>
);
