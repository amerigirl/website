import React from "react";
import { Typography, Box, Container } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      {/* <Typography
          variant="h6"
          component="div"
          sx={{ flextGrow: 1, marginLeft: "13px", fontStyle: 'italic', paddingTop: '9rem', fontSize: 'medium' }}
        >
          Be-Asia McKerracher
        </Typography> */}
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
            backgroundColor: "primary.light",
            justifyContent: "center",
            height: "200px",
            width: "450px",
            padding: "15px",
          }}
        >
          <Typography variant="h4" component="div">
            Hello, I'm Be-Asia, a developer based in Seattle, WA'
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutMe;
