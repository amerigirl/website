import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { aboutImageData } from "../AboutImageData";

const LandingSection = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: 'center',
          gap: '6rem',
          height: "60vh",
          marginTop: '11rem', 
          marginBottom: '2rem'
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            height: "250px",
            width: "550px",
          }}
        >
          <Typography id="home"variant="h4" component="div" sx={{marginTop: '2.2rem', color: 'primary.main', fontWeight: 'bold'}}>
            Hi, I'm Be-Asia!
          </Typography>
          <br></br>
          <Typography sx={{fontSize: '20px'}}>
            Dedicated to fostering a supportive ecosystem for tech professionals,
            I leverage my unique journey from educator to software engineer to
            bridge knowledge gaps in the industry. As a dynamic full-stack
            developer, I harness JavaScript, C#, React, and .NET to craft
            efficient and innovative solutions. My projects have significantly
            boosted operational efficiency through optimized CRUD operations,
            RESTful APIs, and streamlined workflows. With expertise spanning
            front-end and back-end development, I specialize in React,
            JavaScript, and Azure technologies.
          </Typography>
        </Box>

        <Box
          sx={{
            width: 525,
            height: 525,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 0.2,
            border: "8px solid",
            borderColor: "primary.light",
            boxSizing: "border-box",
            backgroundColor: 'primary.light'
          }}
        >
          {aboutImageData.slice(0, 4).map((item, index) => (
            <Box
              key={item.img}
              sx={{
                width: "100%",
                height: "100%",
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

export default LandingSection;
