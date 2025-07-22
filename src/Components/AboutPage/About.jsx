import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "../SectionTitle";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const textProps = {
  textAlign: "justify",
  fontSize: "20px",
  textIndent: "2rem",
};

const About = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "start",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
          marginLeft: "3rem",
        }}
      >
        <SectionTitle title={"A Bit About Me"} />
        <img
          src="./spaceNeedle.png"
          alt="Seatle Skyline with Space Needle"
          style={{ height: "100px" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginRight: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "1000px",
            marginTop: "3rem",
            gap: "2rem",
          }}
        >
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Box
              sx={{
                float: "left",
                marginRight: "2rem",
                border: "1px solid black",
                borderRadius: "30px",
                overflow: "hidden",
                width: "275px",
                height: "325px",
                flexShrink: 0,
              }}
            >
              <img
                src="./meAndSpanish.jpg"
                alt="Me holding a Learn Spanish book"
                style={{
                  width: "275px",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
          {...textProps}
            >
              Hailing from the Pacific NorthWest, I have a love of people,
              diversity, and all things outdoors! I began my professional
              journey with a career in Education, using technology to engage
              students and make learning more interactive and accessible for
              all.
              <br></br>
              <br></br>
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "20px",
                textIndent: "2rem",
              }}
            >
              In addition to building great applications with clients in mind,
              most weekends, you can find me near water: kayaking (my new
              hobby!), or just endjoying a walk around the lake. I also am a
              lifelong learner and lover of all things Spanish! Professional
              certifications include Microsoft&apos;s AZ-900 Cloud Computing
              Fundamentals.
            </Typography>
            <br></br>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "20px",
                textIndent: "2rem",
              }}
            >
              I am currently completing my Bachelors in Applied Science for
              Application Development at Renton Technical College.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component={HashLink}
        to={"/#contact"}
        sx={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          sx={{
            marginTop: "1.5rem",
            alignItems: "center",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            right: "7%",
            padding: ".5rem",
          }}
        >
          Contact
        </Button>
      </Box>
    </>
  );
};

export default About;
