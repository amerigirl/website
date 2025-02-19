import React from "react";
import { Box } from "@mui/material";
import NavArrowUp from "./NavArrowUp";
import NavArrowDown from "./NavArrowDown";

const NavArrowComponent = () => {
  return (
    <Box display="flex" justifyContent="space-between" marginTop={"-21rem"} marginBottom={"30rem"}>
      <Box marginLeft={"5rem"}>
        <NavArrowUp />
      </Box>
      <Box marginRight={"5rem"}>
        <NavArrowDown />
      </Box>
    </Box>
  );
};

export default NavArrowComponent;
