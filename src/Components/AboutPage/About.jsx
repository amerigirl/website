import React from "react";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

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
          marginBottom: "7rem",
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
            maxWidth: "900px",
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
                width: "250px",
                height: "350px",
                flexShrink: 0,
              }}
            >
              <img
                src="./meAndSpanish.jpg"
                alt="Me holding a Learn Spanish book"
                style={{
                  width: "250px",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "20px",
                textIndent: "3rem",
              }}
            >
              Born and raised in Seattle, I have a passion for UX/UI Web Design!
              I began my career in Education, using technology to engage
              students and make learning more accessible.

              <br></br>
              <br></br>
              Outside of building great applications, most weekends, you can find me near water: kayaking (my new hobby!), or just endjoying a walk around the lake.  I also am a lifelong learner and lover of all things Spanish! Professional certifications include Microsoft&apos;s AZ-900 Cloud Computing Fundamentals.  I am currently completing my Bachelors in Applied Science for Application Development. 


            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
