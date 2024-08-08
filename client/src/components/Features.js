// src/components/Features.js
import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const features = [
  {
    title: "AI-Powered",
    description: "Generate content using advanced AI algorithms.",
  },
  {
    title: "Multiple Formats",
    description: "Create blog posts, emails, social media content, and more.",
  },
  {
    title: "Easy to Use",
    description: "User-friendly interface for quick content generation.",
  },
];

const Features = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
