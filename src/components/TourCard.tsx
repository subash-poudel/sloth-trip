import { AccessTime } from "@mui/icons-material";
import { Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={2}>
        <img
          src="https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            Immerse into the Falls
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography component="p" variant="body2" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
            <Rating value={3} readOnly precision={0.5} size="small" />
            <Typography component="p" variant="body2" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography component="p" variant="body2" marginLeft={0.5}>
              (655 reviews )
            </Typography>
          </Box>
          <Box>
            <Typography component="h3" variant="h6" marginTop={0}>
              From C $147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
