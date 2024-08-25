import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "inherit",
  fontSize: "20px",
  backgroundColor: "royalblue",
  color: "white",
  padding: "0.7em 1em",
  paddingLeft: "0.9em",
  display: "flex",
  alignItems: "center",
  border: "none",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "all .5s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "royalblue",
    color: "white",
  },
  "&:hover .svg-wrapper": {
    animation: "fly-1 0.6s ease-in-out infinite alternate",
  },
  "&:hover svg": {
    transform: "translateX(1.2em) rotate(45deg) scale(1.1)",
  },
  "&:hover span": {
    transform: "translateX(5em)",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
  "@keyframes fly-1": {
    from: {
      transform: "translateY(0.1em)",
    },
    to: {
      transform: "translateY(-0.1em)",
    },
  },
}));

// Original SVG Icon
const OriginalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    ></path>
  </svg>
);

// Button Component with the original SVG
const CustomButton = () => (
  <StyledButton>
    <OriginalIcon />
    <Typography component="span">Send</Typography>
  </StyledButton>
);

export default CustomButton;
