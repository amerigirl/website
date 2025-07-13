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

const StyledButton = ({ to, children, ...rest }) => {
  return (
    <SButton component={Link} to={props.to}>
      {props.children}
    </SButton>
  );
};

export default StyledButton;
