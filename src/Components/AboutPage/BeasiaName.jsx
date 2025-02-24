import React from "react";
import { Box, Typography } from "@mui/material";

const BeasiaName = () => {
  const name = "BEASIA";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "12rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          marginRight: "4rem",
        }}
      >
        {name.split("").map((char, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "3.8rem",
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
        <Box sx={{ display: "flex", maxWidth: "900px", marginTop: "5rem" }}>
          <Box
            sx={{
              float: "left",
              marginRight: "1.5rem",
              marginBottom: "1rem",
              border: "1px solid black",
              borderRadius: "30px",
              overflow: "hidden",
              width: "250px",
              height: "auto",
              flexShrink: 0,
            }}
          >
            <img
              src="./meAndGrogu.jpg"
              alt="BeAsia and Grogu Doll"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "block",
              }}
            />
          </Box>
          <Box sx={{}}>
            <Typography sx={{ 
              textAlign: "justify", 
              flex: "1 1 300px" , 
              fontSize:"1.3rem",
              marginTop:"2rem",
            }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur officia nam nemo, quia earum velit consequuntur quaerat
              at adipisci, quo ut! Non cum eveniet, nobis aliquid unde ducimus
              inventore. Explicabo. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aspernatur officia nam nemo, quia earum velit
              consequuntur quaerat at adipisci, quo ut! Non cum eveniet, nobis
              aliquid unde ducimus inventore. Explicabo.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BeasiaName;
