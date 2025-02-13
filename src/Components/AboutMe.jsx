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
          justifyContent: "left",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            height: "200px",
            width: "450px",
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <Typography variant="h4" component="div">
            Hello, I'm Be-Asia!
          </Typography>
        </Box>
        <Box sx={{
          width: 450, 
          height: 450, 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          border: '2px solid black',

        }}>

        </Box>
      </Container>
    </>
  );
};

export default AboutMe;
