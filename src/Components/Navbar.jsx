import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Stack, Box
} from "@mui/material";
import React from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "primary.light", boxShadow: 2 }}>
      <Toolbar sx={{ height: "1rem" }}>
        {/* <Box
          component="img"
          sx={{
            height: "110px",
            width: "210px",
            marginRight: 2,
            marginLeft: "-15px",
            borderRadius: "5px",
          }}
          alt="Logo"
          src="../../logo.png"
        /> */}

        <Stack
          direction="row"
          spacing={4}
          sx={{ justifyContent: "center", width: "100%" }}
        >
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            About
          </Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            Skills
          </Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            Resume
          </Button>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "right" }}>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            sx={{ fontWeight: "bold" }}
          >
            Contactme
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
