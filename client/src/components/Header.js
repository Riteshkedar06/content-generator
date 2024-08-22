import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        p: 10,
        pt: 15,
        textAlign: "center",
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "left", color: "black", zIndex: 1 }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: "16px" }}>
          Welcome to the Writer
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "1.6", color: "#333" }}>
          Use our AI-powered tool to generate content for your blog, emails,
          social media, and advertisements. Simply enter your target audience
          and select the type of content you need.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/generate-content"
          sx={{
            alignSelf: "center",
            bgcolor: "#5D4DCD",
            p: 2,
            px: 4,
            borderRadius: 2,
            mt: 2,
            fontSize: 15,
            fontWeight: "bold",
            transition: "background-color 0.3s ease-in-out",

            "&:hover": {
              backgroundColor: "#3E34B3",
            },
          }}
        >
          Generate Content
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`/hero.png`}
          alt="Hero"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
