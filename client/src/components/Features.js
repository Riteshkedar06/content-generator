import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const features = [
  {
    title: "AI-Powered",
    description:
      "Leverage cutting-edge AI algorithms to automatically generate high-quality content tailored to your needs. Our LLM model ensures your content is both relevant and engaging.",
    image: "img1.png",
  },
  {
    title: "Multiple Formats",
    description:
      "Generate content in a variety of formats. From long-form blog articles to concise social media posts, our platform offers flexibility to create content that suits your goals and audience.",
    image: "img2.png",
  },
  {
    title: "Easy to Use",
    description:
      "The intuitive and user-friendly interface makes content generation quick and easy. Even with minimal experience, you can navigate the platform effortlessly and produce professional-grade content in minutes.",
    image: "img3.png",
  },
];

const Features = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Features
      </Typography>
      {features.map((feature, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          alignItems="center"
          sx={{ mb: 8 }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={feature.image}
              alt={feature.title}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default Features;
