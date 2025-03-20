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
import { timelineItems } from "../../../Data/modalContentData";
import Button from "@mui/material/Button";

const MyTimeline = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState(null);

  const theme = createTheme({
    components: {
      MuiTimelineContent: {
        styleOverrides: {
          root: {},
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
            height: "9rem",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1.3rem",
            color: "black",
          },
        },
      },
    },
  });

  //is this needed if you already have a modal open that can toggle?

  const handleModalOpen = (item) => {
    setItem(item);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setItem(null);
  };

  //I think i need another set of items here that will pop up in a modal when clicked
  //also you can add a seattle weather api to our page
  //also you can make your app for class about checking the stars or the planets

  return (
    <>
      <ThemeProvider theme={theme}>
        <Timeline position="alternate" sx={{ marginBottom: "11rem" }}>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color={item.color} />
                {index < timelineItems.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Button
                  color={"primary.main"}
                  onClick={() => handleModalOpen(item)}
                >
                  {item.content}
                </Button>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ThemeProvider>
      <BasicModal open={modalOpen} onClose={handleModalClose} item={item} />
    </>
  );
};

export default MyTimeline;
