import React from "react";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

const BeasiaName = () => {
  // const name = "BEASIA";

  return (
    <>
      <Box
        sx={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "start",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "9rem",
          marginLeft: "2rem",
    
        }}
      >
        <SectionTitle title={"A Bit About Me"} />
          <img src="./spaceNeedle.png" alt="Seatle Skyline with Space Needle" style={{height: "100px", marginTop: "-4rem"}}/>
      
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "grid",
            marginRight: "4rem",
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            maxWidth: "900px",
            marginTop: "3rem",
            gap: "2rem",
          }}
        >
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Box
              sx={{
                float: "left",
                marginRight: "2rem",
                marginBottom: "1rem",
                border: "1px solid black",
                borderRadius: "30px",
                overflow: "hidden",
                width: "250px",
                height: "350px",
                flexShrink: 0,
              }}
            >
              <img
                src="./meAndSpanish.jpg"
                alt="Me holding a Learn Spanish book"
                style={{
                  width: "250px",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "1.3rem",
                textIndent: "3rem",
              }}
            >
              Born and raised in Seattle, I have a passion for UX/UI
              development. I started my career in Education, using technology to
              engage students and make learning more accessible.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BeasiaName;
