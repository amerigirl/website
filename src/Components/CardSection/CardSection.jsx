import React from "react";
import CardComponent from "./CardComponent";
import { Box, styled } from "@mui/material";

// const StyledBox = styled(Box)({})({
//   height: "40vh",
//   width: "25vw",
//   marginBottom: "10rem",
// });

const CardSection = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        gridColumn: 1,

      }} >
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Box>
    </>
  );
};

export default CardSection;
