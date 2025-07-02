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
          {/* {name.split("").map((char, index) => (
            <Typography
              key={index}
              component={"span"}
              sx={{
                fontSize: "2.5rem",
                fontFamily: "fantasy",
                color: "primary.light",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  color: "#66CC57",
                  WebkitTextStroke: ".1px #000000",
                }}
              >
                {char}
              </span>
            </Typography>
          ))} */}
        </Box>

        <Box sx={{ display: "flex", maxWidth: "900px", marginTop: "3rem" }}>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Box
              sx={{
                float: "left",
                marginRight: "2rem",
                marginBottom: "1rem",
                border: "1px solid black",
                borderRadius: "30px",
                overflow: "hidden",
                width: "350px",
                height: "350px",
                flexShrink: 0,
              }}
            >
              <img
                src="./meAndGrogu.jpg"
                alt="BeAsia and Grogu Doll"
                style={{
                  width: "350px",
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
