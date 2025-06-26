import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ControlledAccordions() {
  const [panel1, setPanel1] = useState(false);
  const [panel2, setPanel2] = useState(false);
  const [panel3, setPanel3] = useState(false);

  
  const handleChange = (panel) => (event, isExpanded) => {
    if (panel === "panel1") {
      if (isExpanded) setPanel1(true);
      // Prevent closing panel1 by doing nothing if isExpanded is false
    } else if (panel === "panel2") {
      if (isExpanded) setPanel2(true);
      // Prevent closing panel2 by doing nothing if isExpanded is false
    } else if (panel === "panel3") {
      if (isExpanded) {
        setPanel3(true);
      } else {
        // If user is closing panel 3, close ALL panels
        setPanel1(false);
        setPanel2(false);
        setPanel3(false);
      }
    }
  };
  
  return (
    <div>
      <Accordion
        expanded={panel1}
        onChange={handleChange("panel1")}
        sx={{ mb: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Front End Development
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={panel2}
        onChange={handleChange("panel2")}
        sx={{ mb: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Design
          </Typography>
      
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={panel3}
        onChange={handleChange("panel3")}
        sx={{ mb: 1}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
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
