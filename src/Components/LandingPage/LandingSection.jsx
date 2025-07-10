import React from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { aboutImageData } from "../../Data/AboutImageData";

const LandingSection = () => {
  /**
   * handles downloading my resume
   */
  const handleResumeClick = () => {
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
              marginTop: "3rem",
            }}
          >
            Hi, I&apos;m Be-Asia!
          </Typography>
          <br></br>
          <Typography sx={{ fontSize: "20px" }}>
            A Full-Stack Developer who enjoys building clear and responsive
            front-end applications using React and connecting them to reliable
            back-end systems using the .NET framework. In my last role, I worked
            closely with designers to build reusable UI components for data
            visualization. I've also had the pleasure of leading the design and
            development of a micro UI that made troubleshooting production
            issues much smoother for my team.
            <br></br>
            <br></br>I believe good documentation is just as important as good
            code. My background in education helps me explain technical ideas in
            a way that's easy to understand, whether I'm updating team wikis or
            supporting junior developers. I enjoy working with others and am
            always looking for ways to make technology more accessible.
            <br></br>
            <br></br>A few highlights from my recent work:
            <ul>
              <li>
                Improved code coverage from 40% to 80% by writing comprehensive
                unit tests.
              </li>
              <li>
                Created and maintained technical documentation that helped the
                team and end-users understand complex systems.
              </li>
              <li>
                Upgraded SDKs in web and function APIs while setting up Azure Health
                Checks to ensure API efficiency.
              </li>
            </ul>
            If you'd like to connect or chat about development and
            documentation, feel free to reach out!
            <br></br>
            <br></br>
          </Typography>
          <br></br>
          <Box>
            <Button
              data-testid="resume"
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleResumeClick}
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
                alt={item.alt}
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
