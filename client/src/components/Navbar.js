import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      sx={{ background: "transparent", boxShadow: "none", p: 1, px: 7 }}
    >
      <Toolbar sx={{ color: "black" }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontSize: "24px", fontWeight: "bold" }}
        >
          Writer
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/generate-content">
          Generated
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
