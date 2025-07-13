/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// Define a reusable StyledButton
const SButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "17px",
  color: "black",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

// StyledButton component that accepts 'to' and 'children' props
// and applies the styles defined in SButton
const StyledButton = ({ to, children, ...rest }) => {
  return (
    <SButton component={Link} to={to}>
      {children}
    </SButton>
  );
};

export default StyledButton;
