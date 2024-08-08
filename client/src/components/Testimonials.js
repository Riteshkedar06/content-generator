// src/components/Testimonials.js
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This tool has saved me countless hours of work!",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing results, my content has never been better.",
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ py: 8, backgroundColor: "#f7f7f7" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Testimonials
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3">
            {testimonial.name}
          </Typography>
          <Typography>{testimonial.feedback}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default Testimonials;
