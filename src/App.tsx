import { Container } from "@mui/system";
import MyAppBar from "./components/AppBar";
import { CityTour } from "./components/CityTour";
import { getCities } from "./utils";

function App() {
  const cities = getCities();
  console.log(cities);
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((c, idx) => (
          <CityTour city={c} key={idx} />
        ))}
      </Container>
    </>
  );
}

export default App;
