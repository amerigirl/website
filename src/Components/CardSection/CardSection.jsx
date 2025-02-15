import React from "react";
import CardComponent from "./CardComponent";
import { Box, Button } from "@mui/material";



const CardSection = () => {
  return (
    <>
      <Box>
        <CardComponent />
      </Box>
      <Button>Scroll up</Button>
    </>
  );
};

export default CardSection;
