import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        px: isMobile ? 2 : 7,
      }}
    >
      <Toolbar
        sx={{
          color: "black",
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={"./logo.png"}
            alt="ContentCraft Logo"
            onClick={() => navigate("/")}
            style={{
              height: isMobile ? "25px" : "40px",
              width: "auto",
            }}
          />
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/generate-content"
              >
                Generated
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/generate-content">
              Generated
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
