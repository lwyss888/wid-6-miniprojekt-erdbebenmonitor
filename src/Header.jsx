import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";

export const Header = ({setMagnitude, setZeitraum}) => (
  <div className="header">
    <Stack direction="row" spacing={3} alignItems="center">
    <Typography variant="h5" sx={{color: "#1565c0"}}>IGEO Erdbebenmonitor</Typography>

      <ButtonGroup variant="outlined" size="small">
        <Button onClick={() => setMagnitude("significant")}>Significant</Button>
        <Button onClick={() => setMagnitude("4.5")}>4.5+</Button>
        <Button onClick={() => setMagnitude("2.5")}>2.5+</Button>
        <Button onClick={() => setMagnitude("1.0")}>1.0+</Button>
        <Button onClick={() => setMagnitude("all")}>Alle</Button>
      </ButtonGroup>

      {/* Zeiträume */}
      <ButtonGroup variant="outlined" size="small">
        <Button onClick={() => setZeitraum("hour")}>Stunde</Button>
        <Button onClick={() => setZeitraum("day")}>Tag</Button>
        <Button onClick={() => setZeitraum("week")}>Woche</Button>
        <Button onClick={() => setZeitraum("month")}>Monat</Button>
      </ButtonGroup>

  </Stack>
  </div>
);
