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
import BasicModal from "../../Modal/BasicModal";
import { useState } from "react";

const MyAcademicJourney = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
            height: "90px",
          },
        },
      },
    },
  });

  const handleModalOpen = () => setModalOpen(true);

  //is this needed if you already have a modal open that can toggle?
  const handleModalClose = () => setModalOpen(false);

  const timelineItems = [
    { content: "Truman State University (2009)", color: "grey" , modalContent: "A great college in the heart of the midwest! I started my learning journey here, graduating with both a Bachelor of Arts and a Master's of Arts in English. Click here to learn more about Truman State University, it's a great place to grow and learn!", modalImage: './TrumanState.jpg'},
    { content: "LaunchCode (2022)", color: "primary" },
    { content: "Microsoft AZ-900 (2023)", color: "secondary" },
    { content: "Renton Technical College (2026)", color: "grey" },
  ];

  //I think i need another set of items here that will pop up in a modal when clicked
  //also you can add a seattle weather api to our page
  //also you can make your app for class about checking the stars or the planets

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
              <TimelineContent variant="button" onClick={handleModalClose}>{item.content}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ThemeProvider>
      <BasicModal />
    </>
  );
};

export default MyAcademicJourney;
