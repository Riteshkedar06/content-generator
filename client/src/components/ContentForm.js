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

const ContentForm = ({ onGenerate }) => {
  const [targetAudience, setTargetAudience] = useState("");
  const [contentType, setContentType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ targetAudience, contentType });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "400px",
        margin: "auto",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
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
          {/* Add more options as needed */}
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ alignSelf: "center" }}
      >
        Generate Content
      </Button>
    </Box>
  );
};

export default ContentForm;
