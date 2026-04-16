import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Float from "./Float";
import HomeIcon from "@mui/icons-material/Home";

function Container({ isHome, setIsHome, children }) {
  function handleBackHome() {
    setIsHome(true);
  }

  return (
    <main className="app-shell">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => setIsHome(true)}
            >
              Weather App
            </Typography>
            <Typography>
              {isHome ? "Current Weather" : "Forecast Weather"}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="app-content">{children}</div>

      {!isHome && (
        <Float onClick={handleBackHome}>
          <HomeIcon />
        </Float>
      )}
    </main>
  );
}

export default Container;
