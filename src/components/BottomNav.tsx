import { BottomNavigation, Paper } from "@mui/material";
import AppModal from "./AppModal";

export const BottomNav = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <AppModal />
      </BottomNavigation>
    </Paper>
  );
};
