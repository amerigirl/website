import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import SkillsData from "../../Data/SkillsData";
import { useState } from "react";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <div>
      {SkillsData.map((skill, id) => (
        <Box>
          
</Box>
      ))}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange({skill.panel})} //so this becomes dynamic? onchange={handleChange{SkillsData.panel}}
        sx={{ mb: 1 }}
      >
   

      </Accordion>

      
     {/* <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
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
            </Typography>
          </Box>
        </AccordionDetails> */}
      
      {/* <Accordion
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
      </Accordion> */}
    </div>
  );
}
