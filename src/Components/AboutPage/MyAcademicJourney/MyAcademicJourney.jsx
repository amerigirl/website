import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { Box, ThemeProvider, createTheme } from "@mui/material";

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
    { content: "Truman State University", color: "grey" },
    { content: "LaunchCode", color: "primary" },
    { content: "Microsoft AZ-900", color: "secondary" },
    { content: "Renton Technical College", color: "grey" },
  ];

  return (
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
      <Box></Box>
    </ThemeProvider>
  );
};

export default MyAcademicJourney;
