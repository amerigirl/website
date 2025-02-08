import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SentimentSatisfiedAltIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flextGrow: 1, marginLeft: "10px" }}
        >
          Be-Asia McKerracher
        </Typography>
        <Stack direction="row" spacing={4} sx={{ marginLeft: "50rem" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Resume</Button>
        </Stack>
        <Stack direction="row" sx={{ marginLeft: "5rem" }}>
          <Button color="inherit" variant="outlined" size="small">
            Contactme
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
