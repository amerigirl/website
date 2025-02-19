import React from "react";
import { Box } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";


const NavArrowUp = () => {
  return (
    <Box display="flex" margin=" 0 2rem" color="primary.light" >
      <ArrowUpwardRoundedIcon style={{fontSize: 50}} />
    </Box>
  );
};

export default NavArrowUp;
