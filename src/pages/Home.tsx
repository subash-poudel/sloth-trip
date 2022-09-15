import { Container } from "@mui/system";
import { CityTour } from "../components/CityTour";
import { getCities } from "../utils";

const Home = () => {
  const cities = getCities();
  console.log('home route');
  return (
      <Container sx={{ marginY: 5 }}>
        {cities.map((c, idx) => (
          <CityTour city={c} key={idx} />
        ))}
      </Container>
  );
};

export default Home;
