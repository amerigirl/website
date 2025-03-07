import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const MyAcademicJourney = () => {
  const theme = createTheme({
    components: {
      MuiTimelineContent: {
        styleOverrides: {
          root: {
            fontSize: "1.4rem",
          },
        },
      },
      MuiTimelineDot: {
        styleOverrides: {
          root: {
            width: "12px",
            height: "12px",
          },
        },
      },
      MuiTimelineConnector: {
        styleOverrides: {
          root: {
            height: "90px", // Adjust this value to lengthen the connector
          },
        },
      },
    },
  });

  const timelineItems = [
    { content: "Truman State University (2009)", color: "grey" },
    { content: "LaunchCode (2022)", color: "primary" },
    { content: "Microsoft AZ-900 (2023)", color: "secondary" },
    { content: "Renton Technical College (2026)", color: "grey" },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Timeline position="alternate" sx={{ marginBottom: "10rem" }}>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color={item.color} />
                {index < timelineItems.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>{item.content}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ThemeProvider>
    </>
  );
};

export default MyAcademicJourney;
