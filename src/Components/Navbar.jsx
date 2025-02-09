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
    <AppBar sx={{backgroundColor: 'transparent'}}>
      <Toolbar sx={{height: '4.5rem', padding: '1.9rem'}}> 
        <Box 
        component="img"
        sx={{
            height: '130px',
            width: '200px',
            marginRight: 2,
            marginLeft: '-15px',
            
        }}
        alt="Logo"
        src="../../logo.png"
        />
       
      
        <Stack
          direction="row"
          spacing={4}
          sx={{ justifyContent: "center", width: "90%" }}
        >
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Resume</Button>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "right" }}>
          <Button color="inherit" variant="outlined" size="small">
            Contactme
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
