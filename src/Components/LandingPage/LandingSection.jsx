import React from "react";
import { Typography, Box, Container, Button} from "@mui/material";
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
            Dynamic Full-Stack Developer & Technical Communicator I specialize
            in building responsive, interactive front-end applications using
            JavaScript, React, and TypeScript, while seamlessly integrating
            robust back-end solutions with Node.js and .NET. My work
            consistently enhances user experiences and drives operational
            efficiency through optimized component structures, clean code, and
            scalable architectures.
            <br></br>
            <br></br>
            With hands-on experience at leading organizations like Microsoft and H&R Block, I have: Deployed
            critical UI components for data visualization using React and Fluent
            UI. Upgraded SDKs and implemented Azure Health Checks to boost API
            reliability. Raised repository test coverage from 40% to 80% by
            developing comprehensive unit tests. Designed and maintained
            technical documentation and internal wikis, making complex systems
            accessible for users and teams. My background in education empowers
            me to translate technical concepts into clear, user-friendly
            documentation, facilitate knowledge sharing, and mentor junior
            developers. I thrive on collaborative problem-solving and am
            passionate about bridging knowledge gaps in tech. Let’s connect to
            explore how my blend of development and documentation skills can
            elevate your next project.
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
