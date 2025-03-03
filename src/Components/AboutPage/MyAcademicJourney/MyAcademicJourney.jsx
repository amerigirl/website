import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import {Box, ThemeProvider, createTheme} from "@mui/material/Box";



const MyAcademicJourney = () => {

  return (
    <>
      <Timeline
        position="alternate"
        sx={{
          marginBottom: "10rem",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.5rem" }}>
            Truman State University
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.5rem" }}>
            LaunchCode
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.5rem" }}>
            Microsoft AZ-900
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.5rem" }}>
            Renton Technical College
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>

      <Box></Box>
    </>
  );

};

export default MyAcademicJourney;
