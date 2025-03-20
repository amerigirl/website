import React from "react";
import SectionTitle from "../../SectionTitle";
import { Box } from "@mui/system";

const CurrentLearning = () => {
  return (
    <Box sx={{ marginTop: "3rem" }}>
      
      <SectionTitle
        title={"Current Learning"}
        subtitle={"Here's what I've been up to lately!"}
      />
    </Box>
  );
};

export default CurrentLearning;
