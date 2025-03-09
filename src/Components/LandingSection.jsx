import React from "react";
import { Typography, Box, Container, Button, Image } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { aboutImageData } from "../AboutImageData";

const LandingSection = () => {
  /**
   * handles downloading my resume
   */
  const handleClick = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/Be-AsiaMcKerracherResume.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Be-AsiaMcKerracherResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("handle clicks");
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "7rem",
          height: "61vh",
          marginTop: "13rem",
          marginBottom: "12.5rem",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            height: "250px",
            width: "500px",
          }}
        >
          <Typography
           data-testid="welcome"
            variant="h4"
            component="div"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "3rem",
              marginTop:"3rem",
            }}
          >
            Hi, I&apos;m Be-Asia!
          </Typography>
          <br></br>
          <Typography sx={{ fontSize: "20px" }}>
            As a dynamic full-stack developer with a strong focus on front-end
            technologies, I harness JavaScript, React, TypeScript, and Node.js
            to craft efficient and innovative solutions. My projects have
            significantly enhanced user experiences and operational efficiency
            through responsive interfaces, optimized component structures, and
            seamless integration with back-end services. While proficient in
            full-stack development, I specialize in creating robust and
            interactive front-end applications using React and JavaScript. My
            expertise extends to implementing RESTful APIs, managing state with
            Redux, and ensuring smooth data flow between client and server.
            <br></br>
            <br></br>
          </Typography>
          <br></br>
          <Box>
            <Button
              data-testid="resume"
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleClick}
            >
              Resume
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: 525,
            height: 550,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 0.2,
            border: "6px solid",
            borderColor: "primary.light",
            boxSizing: "border-box",
            backgroundColor: "primary.light",
            marginTop: "3rem",
          }}
        >
          {aboutImageData.map((item) => (
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
