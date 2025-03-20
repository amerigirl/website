import React from "react";
import { Box, styled } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const StyledBox = styled(Box)(({ theme }) => ({
 
  color: "primary.dark",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

const NavArrowUp = () => {
  return (
    <StyledBox display="flex" margin=" 0 2rem" color="primary.dark" >
      <ArrowUpwardRoundedIcon style={{fontSize: 55}} />
    </StyledBox>
  );
};

export default NavArrowUp;
