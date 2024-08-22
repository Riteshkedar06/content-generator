import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#282c34", color: "white" }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              ContentCraft
            </Typography>
            <Typography variant="body2">
              ContentCraft delivers innovative content generation solutions
              powered by advanced AI technology. Our platform provides versatile
              tools for creating engaging and impactful content across various
              formats to meet your business needs.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ display: "block", my: 0.5 }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block", my: 0.5 }}>
                Terms of Service
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block", my: 0.5 }}>
                Contact Us
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block", my: 0.5 }}>
                About Us
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block", my: 0.5 }}>
                Careers
              </Link>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="#" color="inherit" sx={{ fontSize: 24 }}>
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ fontSize: 24 }}>
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ fontSize: 24 }}>
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body2"
            align="center"
            sx={{ borderTop: "1px solid #444", pt: 3 }}
          >
            © {new Date().getFullYear()} ContentCraft. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
