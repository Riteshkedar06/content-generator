import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <Header />
      <Features />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default Home;
