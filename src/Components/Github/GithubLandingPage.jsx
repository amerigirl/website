import React from "react";
import { Box, Typography } from "@mui/material";

const GithubLandingPage = () => {
  return (
      <>
          <Box>
              <Typography>
                  Projects and Future Learnings
              </Typography>
          </Box>
          <Box sx={{mt: 4, textAlign: "center"}}>
              <img src="./contributions.png"/>
      </Box>
    </>
  );
};

export default GithubLandingPage;
