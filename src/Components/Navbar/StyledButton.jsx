/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
 
  // Use the component prop to determine which type of link to render
  const isHash = typeof to === "string" && to.includes("#");
  const Componenet = isHash ? HashLink : Link;
  return (
    <SButton component={Componenet} to={to}>
      {children}
    </SButton>
  );
};

export default StyledButton;
