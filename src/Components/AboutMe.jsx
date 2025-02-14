import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { aboutImageData } from "../AboutImageData";

const AboutMe = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            height: "250px",
            width: "300px",
          }}
        >
          <Typography variant="h4" component="div">
            Hello, I'm Be-Asia!
          </Typography>
        <br></br>
          <Typography>
            A developer based in Seattle with 3 years of professional experience  
          </Typography>
        </Box>

        <Box
          sx={{
            width: 500,
            height:500,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: .3,
            border: '6px solid',
            borderColor: "primary.main", 
            padding: .3, 
            boxSizing: 'border-box'
          }}
        >
          {aboutImageData.slice(0, 4).map((item, index) => (
            <Box
              key={item.img}
              sx={{
                width: "100%",
                height: "100%",
                border: "2px solid white",
                overflow: "hidden",
              }}
            >
              <img
                src={`${item.img}?w=220&h=220&fit=crop&auto=format`}
                srcSet={`${item.img}?w=220&h=220&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default AboutMe;
