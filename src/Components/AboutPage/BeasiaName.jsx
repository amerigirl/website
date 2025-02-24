import React from "react";
import { Box, Typography } from "@mui/material";
const BeasiaName = () => {
  const name = "BEASIA";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ display: "grid" }}>
        {name.split("").map((char, index) => (
          <Typography key={index}>{char}</Typography>
        ))}
      </Box>
      <Box>
        <img src="./meAndGrogu.jpg"/>
      </Box>
    </Box>
  );
};

export default BeasiaName;
