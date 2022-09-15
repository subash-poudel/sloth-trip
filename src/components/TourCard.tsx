import { AccessTime } from "@mui/icons-material";
import {
  createTheme,
  Grid,
  Paper,
  Rating,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import { Tour } from "../models/City";
import "../App.css";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

type ITourCard = {
  tour: Tour;
};

export const TourCard = (props: ITourCard) => {
  const { duration, image, name, numberOfReviews, price, rating } =
    props.tour;
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={15}>
          <img src={image} alt="" className="img" />
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography component="p" variant="body2" marginLeft={0.5}>
                {duration}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating value={rating} readOnly precision={0.5} size="small" />
              <Typography component="p" variant="body2" marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography component="p" variant="body2" marginLeft={0.5}>
                (${numberOfReviews})
              </Typography>
            </Box>
            <Box>
              <Typography component="h3" variant="h6" marginTop={0}>
                {price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};
