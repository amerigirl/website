import React from "react";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

const BeasiaName = () => {
  // const name = "BEASIA";

  return (
    <>
      <Box  sx={{ marginTop: "10rem" }}>
        <SectionTitle title={"A Bit About Me :)"} />
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
        >
        </Box>

        <Box sx={{ display: "flex", maxWidth: "900px", marginTop: "3rem" , gap: "2rem"}}>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Box
              sx={{
                float: "left",
                marginRight: "2rem",
                marginBottom: "1rem",
                marginTop: "3rem",
                border: "1px solid black",
                borderRadius: "30px",
                overflow: "hidden",
                width: "400px",
                height: "400px",
                flexShrink: 0,
              
              }}
            >
              <img
                src="./meAndSpanish.jpg"
                alt="Me holding a Learn Spanish book"
                style={{
                  width: "400px",
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur officia nam nemo, quia earum velit consequuntur quaerat
              at adipisci, quo ut! Non cum eveniet, nobis aliquid unde ducimus
              inventore. Explicabo. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aspernatur officia nam nemo, quia earum velit
              consequuntur quaerat at adipisci, quo ut! Non cum eveniet, nobis
              aliquid unde ducimus inventore. Explicabo.Non cum eveniet, nobis
              aliquid unde ducimus inventore. Explicabo. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Aspernatur officia nam nem.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BeasiaName;
