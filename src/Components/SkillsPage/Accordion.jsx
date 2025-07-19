import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

import { useState } from "react";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ mb: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
            Front End Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                height: "55px",
              }}
            >
              <img src="./angular.webp" alt="sample image" />
            </Box>
            <Typography>
              As I junior engineer, I created UI components and facilitated
              great user experiences using Angular, JavaScript, and Node.js. A
              great introduction to creating component-based applications!
              <br></br>
              <br></br>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              height: "55px",
              gap: "1rem",
            }}
          >
            <img src="./react.webp" alt="second" />
            <Typography>
              For the past year, I&apos;ve worked to migrate legacy applications from Angular to React using the FluentUI component library, creating dynamic frontend user experiences for enterprise-level applications.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ mb: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
            Design
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This past year, I&apos;ve used React to create dynamic 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ mb: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
            Middleware and Backend Learning
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
