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
        <Accordion
          key={id}
          isExpanded={skill.panel ? true : false}
          onChange={handleChange(skill.panel)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
              {skill.title}
            </Typography>
          </AccordionSummary>
          <Box sx={{ display: "flex", ml: 1 }}>
            <Box
              sx={{
                display: "flex",
                height: "55px",
              }}
            >
              <img src={skill.img1} alt="sample image" />
            </Box>
            <AccordionDetails>
              <Typography sx={{ fontSize: "17px" }}>
                {skill.description1}
              </Typography>
            </AccordionDetails>
          </Box>

          <Box sx={{ display: "flex", ml: 1 }}>
            <Box
              sx={{
                display: "flex",
                height: "55px",
              }}
            >
              {skill.img2 && <img src={skill.img2} alt="sample image" />}
            </Box>

            <AccordionDetails>
              <Typography sx={{ fontSize: "17px" }}>
                {skill.description2}
              </Typography>
            </AccordionDetails>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 50px 60px 115px",
              gap: 4, 
              outline: 1,
              borderRadius: 10,
              paddingTop: 1.5,
              paddingBottom: 1.5, 
              width: "72.5%",
            }}
          >
            {skill.subSkill1 || skill.subSkill2 || skill.subSkill3 ? (
              <Typography sx={{ fontSize: "22px" }}>Learning Level:</Typography>
            ) : undefined}

            <Typography sx={{ fontSize: "22px" }}>{skill.subSkill1}</Typography>
            <Typography sx={{ fontSize: "22px" }}>{skill.subSkill2}</Typography>
            <Typography sx={{ fontSize: "22px" }}>{skill.subSkill3}</Typography>
          </Box>
        </Accordion>
      ))}
    </div>
  );
}
