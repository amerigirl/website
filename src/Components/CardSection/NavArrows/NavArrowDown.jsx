import React from 'react';
import { Box, styled } from "@mui/material";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "primary.dark",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));
const NavArrowDown = () => {
  return (
    <StyledBox color="primary.dark" display="flex">
      <ArrowDownwardRoundedIcon style={{fontSize: 55}} />
    </StyledBox>
  );
}

export default NavArrowDown
