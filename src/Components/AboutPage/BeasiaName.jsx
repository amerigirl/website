import React from "react";
import { Box, Typography } from "@mui/material";

const BeasiaName = () => {
  const name = "BEASIA";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "12rem",
      }}
    >
      <Box sx={{ display: "grid" }}>
        {name.split("").map((char, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "3rem",
              fontFamily: "fantasy",
              color: "primary.light",
              fontStyle: "oblique",
            }}
          >
            {char}
          </Typography>
        ))}
      </Box>

      <Box>
        <img
          src="./meAndGrogu.jpg"
          alt="BeAsia and Grogu Doll"
          height="375vh"
          width={"320vw"}
        />
      </Box>
    </Box>
  );
};

export default BeasiaName;
