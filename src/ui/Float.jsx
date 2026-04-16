import { Fab } from "@mui/material";

const fabStyle = {
  position: "fixed",
  bottom: 24,
  right: 24,
  zIndex: (theme) => theme.zIndex.speedDial,
};

function Float({ onClick, children }) {
  return (
    <Fab color="primary" aria-label="home" sx={fabStyle} onClick={onClick}>
      {children}
    </Fab>
  );
}

export default Float;
