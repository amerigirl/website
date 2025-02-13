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

        {aboutImageData.slice(0, 4).map((item, index) => (

            <Box sx={{
          width: 600, 
          height: 250, 
          display: 'flex',
          gap: 2,
          border: '2px solid black',

        }}
        
        >
          <img  
          
          src={`${item.img}?w=220&h=220&fit=crop&auto=format`}
          srcSet={`${item.img} ?w=220&h=220&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}

          />
        </Box>
        ))}
      
      </Container>
    </>
  );
};

export default AboutMe;
