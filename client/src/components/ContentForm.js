import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";

const AnimatedBox = styled(Box)({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

const AnimatedButton = styled(Button)({
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#3E34B3",
  },
});

const ContentForm = ({ onGenerate }) => {
  const [targetAudience, setTargetAudience] = useState("");
  const [contentType, setContentType] = useState("");
  const [context, setContext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ targetAudience, contentType, context });
  };

  return (
    <AnimatedBox
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        margin: "auto",
        mt: 10,
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        bgcolor: "white",
        width: "50%",
      }}
    >
      <TextField
        label="Target Audience"
        variant="outlined"
        value={targetAudience}
        onChange={(e) => setTargetAudience(e.target.value)}
        required
      />

      <FormControl required>
        <InputLabel id="contentType-label">Content Type</InputLabel>
        <Select
          labelId="contentType-label"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          label="Content Type"
        >
          <MenuItem value="blog">Blog</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="social">Social Media</MenuItem>
          <MenuItem value="ad">Advertisement</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Context"
        variant="outlined"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        required
      />
      <AnimatedButton
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          alignSelf: "center",
          bgcolor: "#5D4DCD",
          p: 2,
          px: 4,
          borderRadius: 2,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Generate Content
      </AnimatedButton>
    </AnimatedBox>
  );
};

export default ContentForm;
