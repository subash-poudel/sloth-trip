import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import { TourCard } from "./components/TourCard";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
}

export default App;
