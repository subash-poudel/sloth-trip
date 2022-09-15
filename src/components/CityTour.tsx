import { Grid, Typography } from "@mui/material";
import { City } from "../models/City";
import { TourCard } from "./TourCard";

type ICityTour = {
  city: City;
};

export const CityTour = (props: ICityTour) => {
  const { name, tours } = props.city;
  return (
    <>
      <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
        Top {name} tours
      </Typography>
      <Grid container spacing={2}>
        {tours.map((t, idx) => (
          <TourCard tour={t} key={idx} />
        ))}
      </Grid>
    </>
  );
};
